import { useLocation } from "react-router-dom"
import useUser from "./useUser"

export const useAuthorize = () => {
    const { isLoading, user } = useUser()
    const { pathname } = useLocation()
    const desierdRole = pathname.split("/").at(1)
    let isAuthorized = false
    let isAuthenticated = false
    if (user) isAuthenticated = true
    const ROLES = {
        admin: "ADMIN",
        owner: "OWNER",
        freelancer: "FREELANCER",
    }

    if (Object.keys(ROLES).includes(desierdRole)) {
        if (user && user.role === ROLES[desierdRole]) isAuthorized = true
    }

    return { isLoading, isAuthenticated, isAuthorized, user }
}