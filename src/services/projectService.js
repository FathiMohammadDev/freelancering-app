import http from "./httpService"


export const getOwnerProjectApi = () => {
    return http.get("/project/owner-projects").then(({ data }) => data.data)
}