import http from "./httpService"

export const getCategoryListApi = () => {
    return http.get("/category/list").then(({ data }) => data.data)
}