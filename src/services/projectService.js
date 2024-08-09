import http from "./httpService"


export const getOwnerProjectApi = () => {
    return http.get("/project/owner-projects").then(({ data }) => data.data)
}

export const deleteOwnerProjectApi = (id) => {
    return http.delete(`/project/${id}`).then(({ data }) => data.data)
}

export const createOwnerProjectApi = (values) => {
    return http.post("/project/add", values).then(({ data }) => data.data)
}

export const editOwnerProjectApi = ({ id, values }) => {
    return http.patch(`/project/update/${id}`, values).then(({ data }) => data.data)
}
export const toggleOwnerProjectApi = ({ id, values }) => {
    return http.patch(`/project/${id}`, values).then(({ data }) => data.data)
}
export const getOwnerSingleProjectApi = (id) => {
    return http.get(`/project/${id}`).then(({ data }) => data.data)
}

export const getProjectsApi = (search) => {
    return http.get(`/project/list${search}`).then(({ data }) => data.data)
}
