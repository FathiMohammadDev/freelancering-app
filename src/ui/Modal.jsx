import { useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Modal = ({ children, open, onClose, title = "Title for modal" }) => {
  const ref = useRef();

  useOutsideClick(ref, open, onClose);

  const openClass =
    "fixed z-50 top-0 left-0 w-full -translate-y-0 h-screen bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-black transition-all";
  const closeClass =
    "fixed z-50 top-0 left-0 w-full -translate-y-full h-screen bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-black transition-all";
  return (
    <div className={`${open ? openClass : closeClass}`}>
      <div
        ref={ref}
        className="bg-bg_primary space-y-4 rounded-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow-sm w-full sm:max-w-xl"
      >
        <div className="flex items-center justify-between">
        <h3 className="text-base font-medium">{title}</h3>
          <MdOutlineClose
            className="w-5 h-5 text-text_primary cursor-pointer"
            onClick={onClose}
          />
        </div>
        <hr className="bg-border" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
