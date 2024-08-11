import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { ChangeUserStatusApi } from "../../../services/authService"

export const useChangeUserStatus = () => {
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: ChangeUserStatusApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["users"]
            })
        },
        onError: (err) => toast.error(err?.reponse?.data?.message),

    })

    return { mutate, isPending }
}
