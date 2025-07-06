export interface IBaseApiResponse<P = undefined> {
    payload?: P;
    success: boolean;
    message?: string;
    status?: number;
}

export type IParamsInterface = {  [key: string]: string | number | boolean | null | undefined }
