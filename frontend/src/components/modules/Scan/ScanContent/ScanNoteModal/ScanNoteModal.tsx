import { Button } from "@generic/Button/Button";
import { FormTextInput } from "@generic/Form/FormTextInput";
import { Modal } from "@generic/Modal/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { ScanContext } from "@modules/Scan/context/ScanContext";
import type { IScanNoteForm } from "@network/hooks/scans/scans.types";
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup";

// VALIDATION
const SCAN_NOTE_SCHEMA: yup.ObjectSchema<IScanNoteForm> = yup.object({
    title: yup.string().required('Title is required'),
    content: yup.string().optional()
});

export const ScanNoteModal = () => {
    // CONTEXT
    const { scanNoteModalOpen, isCreatingScanNote, setScanNoteModalOpen, handleSubmitScanNote } = useContext(ScanContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IScanNoteForm>({
        defaultValues: {
            title: '',
            content: undefined
        },
        resolver: yupResolver(SCAN_NOTE_SCHEMA) // Use yup validation schema
    })

    // STATE
    const [submitError, setSubmitError] = useState<string>('');

    // HANDLER
    const onSubmitForm = async (data: IScanNoteForm) => {
        setSubmitError(''); // Clear previous errors
        
        try {
            await handleSubmitScanNote(data);
            reset(); // Reset form after submission
        } catch (error) {
            setSubmitError((error as Error).message || 'Failed to create note');
        }
    }

    return (
        <Modal
            title="Add Note"
            isOpen={scanNoteModalOpen}
            onClose={() => { 
                setScanNoteModalOpen(false);
                setSubmitError(''); // Clear error when closing
            }}
        >
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmitForm)}>
                {submitError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {submitError}
                    </div>
                )}
                
                <FormTextInput<IScanNoteForm>
                    label="Title"
                    name="title"
                    placeholder="Enter note title"
                    required
                    register={register}
                    errors={errors}
                />
                <FormTextInput<IScanNoteForm>
                    label="Content"
                    name="content"
                    type="textarea"
                    rows={4}
                    placeholder="Enter note content"
                    register={register}
                    errors={errors}
                />
                <Button 
                    type="submit"
                    disabled={isCreatingScanNote} // Disable button while creating note
                >
                    {isCreatingScanNote ? 'Adding...' : 'Add Note'}
                </Button>
            </form>
        </Modal>
    )
}