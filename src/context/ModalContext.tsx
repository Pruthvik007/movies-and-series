import { createContext, useState } from "react";

export const ModalContext = createContext({
  isVisible: false,
  modalContent: null as React.ReactNode | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  openModal: (_children: React.ReactNode) => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>();
  const openModal = (children: React.ReactNode) => {
    setModalContent(children);
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
    setModalContent(null);
  };
  return (
    <ModalContext.Provider
      value={{ isVisible, modalContent, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
