import type { IScan } from "@network/hooks/scans/scans.types";
import type { IBaseApiResponse } from "@network/network.types";
import type { Dispatch } from "react";

export interface IScanContext {
    activeScan: IScan | null;
    scans: IBaseApiResponse<IScan[]> | undefined;
    isScansLoading: boolean;
    setActiveScan: Dispatch<React.SetStateAction<IScan | null>>;
}

export interface IScanContextProviderProps {
    children: React.ReactNode;
}