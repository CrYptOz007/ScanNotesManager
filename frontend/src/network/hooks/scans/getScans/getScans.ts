import { GET } from "@network/fetchers";
import type { IScan } from "../scans.types";
import type { IBaseApiResponse, IParamsInterface } from "@network/network.types";

const SCANS = '/scans';

export type IScansReturn = IScan[];

export const getScans = async (params?: IParamsInterface): Promise<IBaseApiResponse<IScansReturn>> => {
    try {
        const res = await GET(SCANS, {...params});
        return {
            payload: res?.payload,
            success: res?.success,
            message: res?.message,
            status: res?.status,
        }
    } catch (err) {
        return {
            payload: undefined,
            success: false,
            message: err as string,
        }
    }
}
