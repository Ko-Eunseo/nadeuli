import { StyledModal } from "./styled";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StyledModal>{children}</StyledModal>
    </>
  );
};

export default Modal;
