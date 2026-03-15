import { createPortal } from "react-dom";
import ModalContainer from "./ModalContainer";

const modalPortal = document.getElementById("modal");
const Modal = ({ status, setIsVisible }) => {
  return (
    <>
      {createPortal(
        <ModalContainer status={status} setIsVisible={setIsVisible} />,
        modalPortal,
      )}
    </>
  );
};

export default Modal;
