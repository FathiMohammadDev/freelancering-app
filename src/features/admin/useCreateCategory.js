import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { createCategoriApi } from "../../services/categoryService"


export const useCreateCategory = () => {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: createCategoriApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["category"]
            })
        },
        onError: (err) => toast.error(err?.reponse?.data?.message),
    })


    return { isPending, mutate }

}