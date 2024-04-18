import React from "react";
import Modal from "./Modal";
import DailyPerformances from "@/components/lobby/interfaces/performances";
import Stepper from "../Lobby/Stepper";
import DetailPass from "../Lobby/DetailPass";

export default function ModalSeasonPass({
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
      title=" REWARDS"
      classNameBg="bg-slate-900"
      //   classNamePanel="flex items-center w-full border "
      //   defaultCloseButton={false}
      //   defaultTitle={false}
      {...{
        isOpen,
        closeModal,
        setIsOpen,
      }}>
      <DetailPass />
      {/* <DailyPerformances /> */}
    </Modal>
  );
}
