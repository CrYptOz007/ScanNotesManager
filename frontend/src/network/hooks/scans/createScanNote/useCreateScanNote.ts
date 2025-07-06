import { useMutation, type UseMutationOptions } from "@tanstack/react-query"
import { createScanNote, type ICreateScanNote } from "./createScanNote"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useCreateScanNote = (id: number, params?: ICreateScanNote, callback?: UseMutationOptions<any, any, any, any>) => {
    return useMutation({
        mutationKey: ['createScanNote', params],
        mutationFn: (args) => createScanNote(id, {...params, ...args}),
        ...callback
    })
}
