import http from "./httpService"


export const changePropsalStatusApi = ({ id, values }) => {
    return http.patch(`proposal/${id}`, values).then(({ data }) => data.data)
}

export const getProposalsApi = () => {
    return http.get("proposal/list").then(({ data }) => data.data)
}

export const createPropsalApi = (values) => {
    return http.post("proposal/add", values).then(({ data }) => data.data)
}