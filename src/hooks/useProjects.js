import { useQuery } from "@tanstack/react-query"
import { getProjectsApi } from "../services/projectService"
import { useLocation } from "react-router-dom"
import queryString from "query-string"


export function useProjects() {
    const { search } = useLocation()
    const queryObject = queryString.stringify(search)

    const { isLoading, data, isError } = useQuery({
        queryKey: ["all-projects", queryObject],
        queryFn: () => getProjectsApi(search),
    })

    const { projects } = data || {}

    return { isLoading, projects, isError }
}
