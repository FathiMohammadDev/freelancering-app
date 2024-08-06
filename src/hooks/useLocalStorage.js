import { useState } from "react"

export const useLocalStorage = (name, initailValue) => {
    const initialState = JSON.parse(localStorage.getItem(name)) || initailValue
    const [state, setState] = useState(initialState)

    const postLocalStorage = (value) => {
        localStorage.setItem(name, JSON.stringify(value))
    }
    const deleteLocalStorage = () => {
        localStorage.removeItem(name)
    }
    return { state, postLocalStorage, deleteLocalStorage }

}