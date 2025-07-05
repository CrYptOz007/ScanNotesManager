import {type IParamsInterface} from "../network.types";

/**
 * Generates stringified URLSearchParams for specified params object
 * 
 * @param params - Query params
 * @returns A URL-safe query param string
 */
export const generateParams = (params?: IParamsInterface) => {

    if (!params) { return '' }

    const filteredParams: Record<string, string> = {};
    for (const key in params) {
        if (params[key]) {
            filteredParams[key] = String(params[key]);
        }
    }

    const p = new URLSearchParams(filteredParams);

    return `?${p.toString()}`;

}