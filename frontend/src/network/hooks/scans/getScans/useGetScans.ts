import { useQuery } from "@tanstack/react-query"
import type { IParamsInterface } from "@network/network.types"
import { getScans } from "./getScans"

export const useScans = (params?: IParamsInterface) => {
    return useQuery({
        queryKey: ['scans', params],
        queryFn: () => getScans(params),
    })
}