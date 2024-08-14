import { useEffect } from "react";

export  function useOutsideClick(ref, open, handler, listenCapturing = true) {

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                handler();
            }
        }

        document.addEventListener("click", handleClick, listenCapturing);

        return () =>
            document.removeEventListener("click", handleClick, listenCapturing);
    }, [handler, listenCapturing]);

}