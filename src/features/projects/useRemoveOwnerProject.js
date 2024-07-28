import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteOwnerProjectApi } from "../../services/projectService"
import toast from "react-hot-toast"

export const useRemoveOwnerProject = () => {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: deleteOwnerProjectApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            })
        },
        onError: (err) => toast.error(err?.reponse?.data?.message),

    })

    return { mutate, isPending }
}
