import http from "./httpService"

export const getOTP = (data) => {
    return http.post("/user/get-otp", data)
}

export const checkOTP = (data) => {
    return http.post("/user/check-otp", data)
}

export const completeProfile = (data) => {
    return http.post("/user/complete-profile", data)
}
export function getUser() {
    return http.get("/user/profile").then(({ data }) => data.data);
}
export function getUsersApi() {
    return http.get("/admin/user/list").then(({ data }) => data.data);
}