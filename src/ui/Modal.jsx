import { MdOutlineClose } from "react-icons/md";

const Modal = ({ children, open, onClose }) => {
  const openClass =
    "fixed top-0 left-0 w-full -translate-y-0 h-screen backdrop-blur-sm transition-all";
  const closeClass =
    "fixed top-0 left-0 w-full -translate-y-full h-screen backdrop-blur-sm transition-all";
  return (
    <div className={`${open ? openClass : closeClass}`}>
      <div className="bg-white space-y-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-sm w-full sm:max-w-md">
        <div className=" float-end">
          <MdOutlineClose className="w-6 h-6 text-black cursor-pointer" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
