import { useQuery, type UseQueryOptions } from "@tanstack/react-query"
import type { IParamsInterface } from "@network/network.types"
import { getScanNotes } from "./getScanNotes"

export const useScanNotes = (id: number, params?: IParamsInterface, options?: UseQueryOptions) => {
    return useQuery({
        queryKey: ['scanNotes', id, params],
        queryFn: () => getScanNotes(id, params),
        ...options
    })
}