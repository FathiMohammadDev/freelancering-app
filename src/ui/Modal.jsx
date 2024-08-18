import { MdOutlineClose } from "react-icons/md";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Modal = ({
  children,
  open,
  onClose,
  title = "Title for modal",
  createProject = false,
}) => {
  const ref = useOutsideClick(onClose);

  const openClass =
    "fixed z-50 top-0 left-0 w-full -translate-y-0 h-screen bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-black transition-all overflow-hidden";
  const closeClass =
    "fixed z-50 top-0 left-0 w-full -translate-y-full h-screen bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 bg-black transition-all overflow-hidden";
  return (
    <div className={`${open ? openClass : closeClass}`}>
      <div
        ref={ref}
        className={`bg-bg_primary space-y-4 rounded-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 shadow-sm w-[90%] sm:w-full ${
          createProject ? "sm:max-w-5xl" : "sm:max-w-xl"
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-base text-text_primary font-medium">{title}</h3>
          <MdOutlineClose
            className="w-5 h-5 text-text_primary cursor-pointer"
            onClick={onClose}
          />
        </div>
        <hr className="border border-border" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
