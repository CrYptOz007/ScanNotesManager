import type { IScan, IScanNoteForm } from "@hooks/scans/scans.types";
import { createContext, useState } from "react";
import type { IScanContext, IScanContextProviderProps } from "./ScanContext.types";
import { useScans } from "@hooks/scans/getScans/useGetScans";
import { useScanNotes } from "@network/hooks/scans/getScanNotes/useGetScans";
import type { UseQueryResult } from "@tanstack/react-query";
import type { IBaseApiResponse } from "@network/network.types";
import type { IScanNotesReturn } from "@network/hooks/scans/getScanNotes/getScanNotes";
import { useCreateScanNote } from "@network/hooks/scans/createScanNote/useCreateScanNote";

export const ScanContext = createContext<IScanContext>({
    activeScan: null,
    scanNoteModalOpen: false,
    scans: undefined,
    isScansLoading: true,
    scanNotes: undefined,
    isScanNotesLoading: true,
    isCreatingScanNote: false,
    setActiveScan: () => {},
    setScanNoteModalOpen: () => {},
    handleSubmitScanNote: async () => {},
});


export const ScanContextProvider = ({ children }: IScanContextProviderProps) => {
    // STATE
    const [activeScan, setActiveScan] = useState<IScan | null>(null);
    const [scanNoteModalOpen, setScanNoteModalOpen] = useState<boolean>(false);
    
    // HOOKS
    const { data: scans, isLoading: isScansLoading } = useScans();
    const { data: scanNotes, isLoading: isScanNotesLoading, refetch: refetchScanNotes } = useScanNotes(activeScan?.id || 0, undefined, {
        queryKey: ['scanNotes', activeScan?.id],
        enabled: !!activeScan?.id, // Only fetch notes if an active scan is set
    }) as UseQueryResult<IBaseApiResponse<IScanNotesReturn>, undefined>;

    // MUTATIONS
    const { mutateAsync: createScanNote, isPending: isCreatingScanNote } = useCreateScanNote(activeScan?.id || 0, undefined)

    // HANDLERS
    const handleSubmitScanNote = async (data: IScanNoteForm) => {
        if (!activeScan) return;

        try { 
            const result = await createScanNote({id: activeScan.id, ...data});
            console.log(result)
            
            if (!result.success) {
                throw new Error(result.message || "Failed to create scan note");
            }
            
            setScanNoteModalOpen(false); // Close modal after successful creation
            refetchScanNotes(); // Refetch scan notes to update the list
        } catch (error) {
            throw error;
        }
    }

    return (
        <ScanContext.Provider value={{ 
            activeScan,
            scanNoteModalOpen,
            scans,
            isScansLoading,
            scanNotes,
            isScanNotesLoading,
            isCreatingScanNote,
            setActiveScan, 
            setScanNoteModalOpen,
            handleSubmitScanNote
        }}>
            {children}
        </ScanContext.Provider>
    );
}
