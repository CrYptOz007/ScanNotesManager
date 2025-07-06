import { POST } from "@network/fetchers";
import type { IBaseApiResponse } from "@network/network.types";
import type { IScan, IScanNote } from "../scans.types";

export const SCANS = '/scans';

export type ICreateScanNote = IScanNote & { scan: IScan };

export const createScanNote = async (id: string, params: ICreateScanNote): Promise<IBaseApiResponse<ICreateScanNote>> => {
    try {
        const res = await POST(`${SCANS}/${id}/notes`, undefined, params);
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
            message: (err as string)
        }
    }
}
