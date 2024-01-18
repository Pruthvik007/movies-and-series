import { ModalProvider } from "./ModalContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ModalProvider>{children}</ModalProvider>
    </>
  );
};

export default ContextProvider;
