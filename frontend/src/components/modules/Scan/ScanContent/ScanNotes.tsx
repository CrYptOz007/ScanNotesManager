import { useContext } from "react";
import { ScanContext } from "../context/ScanContext";
import { Accordion, AccordionContent, AccordionTitle } from "@generic/Accordion/Accordion";

export const ScanNotes = () => {
    const { scanNotes, isScanNotesLoading } = useContext(ScanContext);
    return (
        <div className="w-full">
            {isScanNotesLoading ? (
                <p className="text-gray-500">Loading notes...</p>
            ) : scanNotes?.payload && scanNotes?.payload.length > 0 ? (
                <div className="flex flex-col gap-4 w-full">
                    {scanNotes?.payload?.map(note => (
                        <Accordion key={note.id}>
                            <AccordionTitle>{note.title}</AccordionTitle>
                            <AccordionContent>
                                {note.content}
                                <p className="text-xs text-gray-400 mt-2">
                                    Created on: {new Date(note.createdAt).toLocaleString()}
                                </p>
                            </AccordionContent>
                        </Accordion>
                    ))}
                </div>
            ) : (
                <div className="flex h-full">
                    <p className="text-gray-500">No notes available. Add a note to the scan.</p>
                </div>
            )}
        </div>
    )
}