import { useMutation, useQueryClient } from "@tanstack/react-query"
import { editOwnerProjectApi } from "../../services/projectService"
import toast from "react-hot-toast"


export const useEditOwnerProject = () => {
    const queryClient = useQueryClient()

    const { mutate: editProject, isPending:isEditing } = useMutation({
        mutationFn: editOwnerProjectApi,
        onSuccess: ({ message }) => {
            toast.success(message)
            queryClient.invalidateQueries({
                queryKey: ["projects"]
            })
        },
        onError: (err) => toast.error(err?.reponse?.data?.message),
    })


    return { isEditing, editProject }

}