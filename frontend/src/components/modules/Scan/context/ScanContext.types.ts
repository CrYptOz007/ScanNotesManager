import type { IScanNotesReturn } from "@network/hooks/scans/getScanNotes/getScanNotes";
import type { IScansReturn } from "@network/hooks/scans/getScans/getScans";
import type { IScan, IScanNoteForm } from "@network/hooks/scans/scans.types";
import type { IBaseApiResponse } from "@network/network.types";
import type { Dispatch } from "react";

export interface IScanContext {
    activeScan: IScan | null;
    scanNoteModalOpen: boolean;
    scans: IBaseApiResponse<IScansReturn> | undefined;
    isScansLoading: boolean;
    scanNotes: IBaseApiResponse<IScanNotesReturn> | undefined;
    isScanNotesLoading: boolean;
    isCreatingScanNote: boolean;
    setActiveScan: Dispatch<React.SetStateAction<IScan | null>>;
    setScanNoteModalOpen: Dispatch<React.SetStateAction<boolean>>;
    handleSubmitScanNote: (data: IScanNoteForm) => Promise<void>;
}

export interface IScanContextProviderProps {
    children: React.ReactNode;
}