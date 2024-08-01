import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toggleOwnerProjectApi } from "../../services/projectService"
import toast from "react-hot-toast"


export const useToggleOwnerProject = () => {
    const queryClient = useQueryClient()

    const { mutate: toggleProject, isPending: istoggling } = useMutation({
        mutationFn: toggleOwnerProjectApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            })
        },
        onError: (err) => toast.error(err?.reponse?.data?.message),
    })


    return { istoggling, toggleProject }

}