import { useQuery } from "@tanstack/react-query"
import { getProposalsApi } from "../../services/proposalService"


export function useProposals() {

    const { isLoading, data, isError } = useQuery({
        queryKey: ["proposals"],
        queryFn: getProposalsApi,
    })

    const { proposals } = data || {}

    return { isLoading, proposals, isError }
}
