import { useQuery } from "@tanstack/react-query"
import type { IParamsInterface } from "@network/network.types"
import { getScanNotes } from "./getScanNotes"

export const useScanNotes = (id: string, params?: IParamsInterface) => {
    return useQuery({
        queryKey: ['scanNotes', id, params],
        queryFn: () => getScanNotes(id, params),
    })
}