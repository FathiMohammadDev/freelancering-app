import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { createPropsalApi } from "../../services/proposalService"


export const useCreateProposal = () => {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: createPropsalApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["proposals"]
            })
        },
        onError: (err) => toast.error(err?.reponse?.data?.message),
    })


    return { isPending, mutate }

}