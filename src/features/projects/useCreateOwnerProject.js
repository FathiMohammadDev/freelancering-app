import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createOwnerProjectApi } from "../../services/projectService"
import toast from "react-hot-toast"


export const useCreateOwnerProject = () => {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: createOwnerProjectApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            })
        },
        onError: (err) => toast.error(err?.reponse?.data?.message),
    })


    return { isPending, mutate }

}