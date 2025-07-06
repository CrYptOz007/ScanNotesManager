import { type IParamsInterface } from "./network.types";
import getNetworkAdapter from "./networkAdapter";
import { AxiosError, type AxiosRequestConfig } from 'axios';
import { generateParams } from "./utils/generateParams";

export class requestHandler {

    // REQUEST PROTOCOL
    _protocol: string = 'GET'; // Default to GET

    constructor(protocol: string) {
       this._protocol = protocol;
       this.request = this.request.bind(this);
    }

    public async request(
        route: string,
        params?: IParamsInterface,
        requestBody?: any,
        config?: AxiosRequestConfig
    ) {
        try {

            const isFormData = requestBody instanceof FormData;

            const headers: HeadersInit = {};

            if(!isFormData) {
                headers['Content-Type'] = 'application/json'
            }

            const networkAdapter = getNetworkAdapter();
            const res = await networkAdapter.request({
                url: `${route}${generateParams(params)}`,
                method: this._protocol,
                data: isFormData ? requestBody : requestBody ? JSON.stringify(requestBody) : undefined,
                headers,
                ...config
            });

            if(res.data) {
                return {...res.data, status: res.status}
            }

        } catch (err) {
                console.debug("Request Error:", err);
            throw (err as AxiosError)?.message;
        }
    }

}

const getHandler = new requestHandler('GET');
export const GET = getHandler.request;

const postHandler = new requestHandler('POST');
export const POST = postHandler.request;
