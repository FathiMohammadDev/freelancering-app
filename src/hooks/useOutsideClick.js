import { useEffect } from "react"

export const useOutsideClick = (modalRef, open, onClose) => {

    useEffect(() => {

        const clickHandler = (e) => {
            const go = []
            console.log(modalRef.current);
            if (modalRef.current && !modalRef.current.contains(e.target.current)) {
                console.log(true);
                onClose()
            }
        }

        if (open === true && modalRef) {
            document.addEventListener("click", clickHandler, true)
        }

        return () => {
            document.removeEventListener("click", clickHandler)
        }

    }, [open])

}