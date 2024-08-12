import http from "./httpService"

export const getCategoryListApi = () => {
    return http.get("/category/list").then(({ data }) => data.data)
}
export const createCategoriApi = (data) => {
    return http.post("/admin/category/add", data).then(({ data }) => data.data)
}
export const removeCategoriApi = (id) => {
    return http.delete(`/admin/category/remove/${id}`).then(({ data }) => data.data)
}