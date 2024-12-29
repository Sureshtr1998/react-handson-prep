import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
}
const Modal = (props: Props) => {
  const { children } = props;
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("lazy-id")
  );
};

export default Modal;
