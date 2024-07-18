import http from "./httpService"

export const getOTP = (data) => {
    return http.post("/user/get-otp", data)
}

export const checkOTP = (data) => {
   return http.post("/user/check-otp", data)
}