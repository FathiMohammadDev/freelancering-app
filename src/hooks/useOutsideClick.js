import { useEffect } from "react"

export const useOutsideClick = (modalRef, open, onClose) => {

    useEffect(() => {

        const clickHandler = (e) => {
            if (e.target === modalRef.current) {
                onClose()
            }
        }

        if (open === true && modalRef) {
            document.addEventListener("click", clickHandler)
        }

        return () => {
            document.removeEventListener("click", clickHandler)
        }

    }, [open])

}