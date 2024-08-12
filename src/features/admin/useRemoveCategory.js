import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { removeCategoriApi } from "../../services/categoryService"

export const useRemoveCategory = () => {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: removeCategoriApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["category"]
            })
        },
        onError: (err) => toast.error(err?.reponse?.data?.message),

    })

    return { mutate, isPending }
}
