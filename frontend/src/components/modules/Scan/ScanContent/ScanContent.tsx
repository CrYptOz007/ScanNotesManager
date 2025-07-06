import { useContext, useState } from "react"
import { ScanContext } from "../context/ScanContext";
import { ScanNotes } from "./ScanNotes";
import { Button } from "@generic/Button/Button";
import { Modal } from "@generic/Modal/Modal";

export const ScanContent = () => {
    // CONTEXT
    const { activeScan } = useContext(ScanContext);

    // STATE
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <div className="col-span-2 flex flex-col h-full p-8">
            {activeScan ? (
                <>
                    <div className="flex flex-row justify-between">
                        <div className="mb-6 flex flex-col">
                            <h2 className="text-2xl font-medium">Scan ID: {activeScan.id}</h2>
                            <h3 className="text-lg font-light">Created on: {new Date(activeScan.createdAt).toLocaleString()}</h3>
                        </div>
                        <Button
                            onClick={() => { setModalOpen(!modalOpen); }}
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
            <Modal
                title="Add Note"
                isOpen={modalOpen}
                onClose={() => { setModalOpen(!modalOpen); }}
                children={undefined}
            >

            </Modal>
        </div>
    )
}