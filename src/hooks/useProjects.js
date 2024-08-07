import { useQuery } from "@tanstack/react-query"
import { getProjectsApi } from "../services/projectService"


export function useProjects() {

    const { isLoading, data, isError } = useQuery({
        queryKey: ["all-projects"],
        queryFn: getProjectsApi,
    })

    const { projects } = data || {}

    return { isLoading, projects, isError }
}
