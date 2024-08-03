import http from "./httpService"


export const changePropsalStatusApi = ({ id, values }) => {
    return http.patch(`proposal/${id}`, values).then(({ data }) => data.data)
}