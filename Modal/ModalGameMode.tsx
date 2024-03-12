import React from "react";
import Modal from "./Modal";
import DailyPerformances from "@/components/lobby/interfaces/performances";
import ChooseEvent from "@/components/play/ChooseEvent";

export default function ModalGameMode({
  // isOpen, setIsOpen,
  closeModal = () => {},
  isOpen = false,
  setIsOpen = () => {},
}) {
  //   let [isOpen, setIsOpen] = useState(true);
  //   function closeModal() {
  //     setIsOpen(false);
  //   }
  //   function openModal() {
  //     setIsOpen(true);
  //   }
  // storeSettings

  return (
    <Modal
      closeEsc
      title="Choose event"
      classNameBg="bg-gradient-to-r from-indigo-500"
      //   classNamePanel="flex items-center w-full border "
      //   defaultCloseButton={false}
      //   defaultTitle={false}
      {...{
        isOpen,
        closeModal,
        setIsOpen,
      }}>
      <ChooseEvent />
    </Modal>
  );
}
