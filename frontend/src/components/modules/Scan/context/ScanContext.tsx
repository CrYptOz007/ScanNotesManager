import type { IScan } from "@hooks/scans/scans.types";
import { createContext, useState } from "react";
import type { IScanContext, IScanContextProviderProps } from "./ScanContext.types";
import { useScans } from "@hooks/scans/getScans/useGetScans";
import { useScanNotes } from "@network/hooks/scans/getScanNotes/useGetScans";
import type { UseQueryResult } from "@tanstack/react-query";
import type { IBaseApiResponse } from "@network/network.types";
import type { IScanNotesReturn } from "@network/hooks/scans/getScanNotes/getScanNotes";

export const ScanContext = createContext<IScanContext>({
    activeScan: null,
    scans: undefined,
    isScansLoading: true,
    scanNotes: undefined,
    isScanNotesLoading: true,
    setActiveScan: () => {},
});


export const ScanContextProvider = ({ children }: IScanContextProviderProps) => {
    // STATE
    const [activeScan, setActiveScan] = useState<IScan | null>(null);
    
    // HOOKS
    const { data: scans, isLoading: isScansLoading } = useScans();
    const { data: scanNotes, isLoading: isScanNotesLoading } = useScanNotes(activeScan?.id || 0, undefined, {
        queryKey: ['scanNotes', activeScan?.id],
        enabled: !!activeScan?.id, // Only fetch notes if an active scan is set
    }) as UseQueryResult<IBaseApiResponse<IScanNotesReturn>, undefined>;
    
    return (
        <ScanContext.Provider value={{ 
            activeScan,
            scans,
            isScansLoading,
            scanNotes,
            isScanNotesLoading,
            setActiveScan, 
        }}>
            {children}
        </ScanContext.Provider>
    );
}
