export interface IBaseApiResponse<P = undefined> {
    payload?: P;
    success: boolean;
    message?: string;
}

export type IParamsInterface = {  [key: string]: string | number | boolean | null | undefined }
