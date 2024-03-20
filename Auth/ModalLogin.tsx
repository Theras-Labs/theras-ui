import React from "react";
import Modal from "../Modal/Modal";
import AuthOptions from "./AuthOptions";

export default function ModalLogin({
  // isOpen, setIsOpen,
  closeModal = () => {},
  isOpen = false,
  setIsOpen = () => {},
}) {
  return (
    <Modal
      closeEsc
      title="Login Profile"
      classNameBg="bg-gradient-to-r from-indigo-500"
      //   classNamePanel="flex items-center w-full border "
      //   defaultCloseButton={false}
      //   defaultTitle={false}
      {...{
        isOpen,
        closeModal,
        setIsOpen,
      }}>
      <AuthOptions />
    </Modal>
  );
}
