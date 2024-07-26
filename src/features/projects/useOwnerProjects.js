import { useQuery } from "@tanstack/react-query"
import { getOwnerProjectApi } from "../../services/projectService"


export function useOwnerProjects() {

    const { isLoading, data, isError } = useQuery({
        queryKey: ["projects"],
        queryFn: getOwnerProjectApi,
    })

    const { projects } = data || {}

    return { isLoading, projects, isError }
}
