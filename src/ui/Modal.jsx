import { useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Modal = ({ children, open, onClose }) => {
  const ref = useRef();

  useOutsideClick(ref, open, onClose);

  const openClass =
    "fixed z-50 top-0 left-0 w-full -translate-y-0 h-screen bg-bg_modal backdrop-blur-sm transition-all";
  const closeClass =
    "fixed z-50 top-0 left-0 w-full -translate-y-full h-screen bg-bg_modal backdrop-blur-sm transition-all";
  return (
    <div className={`${open ? openClass : closeClass}`}>
      <div
        ref={ref}
        className="bg-bg_primary rounded-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-sm w-full sm:max-w-md"
      >
        <div className="flex justify-end">
          <MdOutlineClose
            className="w-6 h-6 text-black cursor-pointer"
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
