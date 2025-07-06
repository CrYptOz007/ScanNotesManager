import { GET } from "@network/fetchers";
import type { IBaseApiResponse, IParamsInterface } from "@network/network.types";
import type { IScanNote } from "../scans.types";

const SCANS = '/scans';

export type IScanNotesReturn = IScanNote[];

export const getScanNotes = async (id: string, params?: IParamsInterface): Promise<IBaseApiResponse<IScanNotesReturn>> => {
    try {
        const res = await GET(`${SCANS}/${id}/notes`, {...params});
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
