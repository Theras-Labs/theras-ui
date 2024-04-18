import React from "react";
import Modal from "./Modal";
import DailyPerformances from "@/components/lobby/interfaces/performances";
import DetailPerformances from "@/components/lobby/interfaces/performances/DetailPerformances";

export default function ModalQuest({
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
      title="Performance"
      classNameBg="bg-black"
      //   classNamePanel="flex items-center w-full border "
      //   defaultCloseButton={false}
      //   defaultTitle={false}
      {...{
        isOpen,
        closeModal,
        setIsOpen,
      }}>
      <DetailPerformances />
    </Modal>
  );
}
