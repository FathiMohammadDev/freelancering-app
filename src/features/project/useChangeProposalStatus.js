import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { changePropsalStatusApi } from "../../services/proposalService"
import { useParams } from "react-router-dom"

export const useChangeProjectStatus = () => {
    const { id } = useParams()
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: changePropsalStatusApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["project", id]
            })
        },
        onError: (err) => toast.error(err?.reponse?.data?.message),

    })

    return { mutate, isPending }
}
