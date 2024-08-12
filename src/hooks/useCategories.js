import { useQuery } from "@tanstack/react-query"
import { getCategoryListApi } from "../services/categoryService"

export const useCategories = () => {

    const { isLoading, data, isError } = useQuery({
        queryKey: ["category"],
        queryFn: getCategoryListApi,
    })

    const { categories: rawCategories = [] } = data || {}

    const categories = rawCategories.map((item) => {
        return {
            label: item.title,
            value: item._id
        }
    })


    return { isLoading, categories, isError, adminCategory: rawCategories }

}

