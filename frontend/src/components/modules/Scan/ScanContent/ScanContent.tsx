import { useContext } from "react"
import { ScanContext } from "../context/ScanContext";
import { ScanNotes } from "./ScanNotes";
import { Button } from "@generic/Button/Button";
import { ScanNoteModal } from "./ScanNoteModal/ScanNoteModal";

export const ScanContent = () => {
    // CONTEXT
    const { activeScan, setScanNoteModalOpen } = useContext(ScanContext);
    
    return (
        <div className="col-span-2 flex flex-col h-full p-8">
            {activeScan ? (
                <>
                    <div className="flex flex-row justify-between mb-6">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-medium">Scan ID: {activeScan.id}</h2>
                            <h3 className="text-lg font-light">Created on: {new Date(activeScan.createdAt).toLocaleString()}</h3>
                        </div>
                        <Button
                            onClick={() => { setScanNoteModalOpen(true); }}
                        >Add Note</Button>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Notes</h3>
                    <ScanNotes />

                </>
            ) : (
                <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Select a scan to view notes.</p>
                </div>
            )}
            <ScanNoteModal />
        </div>
    )
}