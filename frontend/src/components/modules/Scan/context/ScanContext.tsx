import type { IScan } from "@hooks/scans/scans.types";
import { createContext, useState } from "react";
import type { IScanContext, IScanContextProviderProps } from "./ScanContext.types";
import { useScans } from "@hooks/scans/getScans/useGetScans";

export const ScanContext = createContext<IScanContext>({
    activeScan: null,
    scans: undefined,
    isScansLoading: true,
    setActiveScan: () => {},
});


export const ScanContextProvider = ({ children }: IScanContextProviderProps) => {
    // STATE
    const [activeScan, setActiveScan] = useState<IScan | null>(null);
    
    // HOOKS
    const { data: scans, isLoading: isScansLoading } = useScans();
    return (
        <ScanContext.Provider value={{ 
            activeScan,
            scans, 
            isScansLoading, 
            setActiveScan, 
        }}>
            {children}
        </ScanContext.Provider>
    );
}
