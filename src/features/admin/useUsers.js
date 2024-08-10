import { useQuery } from "@tanstack/react-query"
import { getUsersApi } from "../../services/authService"


export function useUsers() {

    const { isLoading, data, isError } = useQuery({
        queryKey: ["users"],
        queryFn: getUsersApi,
    })

    const { users } = data || {}

    return { isLoading, users, isError }
}
