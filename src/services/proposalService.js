import http from "./httpService"


export const changePropsalStatusApi = ({ proposalId, ...values }) => {
    return http.patch(`proposal/${proposalId}`, values).then(({ data }) => data.data)
}

export const getProposalsApi = () => {
    return http.get("proposal/list").then(({ data }) => data.data)
}

export const createPropsalApi = (values) => {
    return http.post("proposal/add", values).then(({ data }) => data.data)
}