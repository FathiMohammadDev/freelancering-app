import { useQuery } from "@tanstack/react-query"
import { getOwnerSingleProjectApi } from "../../services/projectService"
import { useParams } from "react-router-dom"


export function useOwnerProject() {
    const { id } = useParams()
    const { isLoading, data, isError } = useQuery({
        queryKey: ["project", id],
        queryFn: () => getOwnerSingleProjectApi(id),
        retry: false
    })

    const { project } = data || {}

    return { isLoading, project, isError }
}
