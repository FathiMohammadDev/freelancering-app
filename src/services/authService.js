import http from "./httpService"

export const getOTP = (data) => {
    http.post("/user/get-otp",data)
}

export const checkOTP = (data) => {
    http.post("/user/check-otp",data)
}