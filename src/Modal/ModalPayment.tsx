import React from "react";
import Modal from "./Modal";

// quantity on postponed
export default function ModalPayment({
  // isOpen, setIsOpen,
  closeModal = () => {},
  isOpen = false,
  setIsOpen = () => {},
}) {
  // read profile too
  // native -> no approve
  // token -> approve
  // paypal ->
  //
  //
  // check wallet
  // read supply
  //
  // detail price

  // information -> price
  // will send to your address if already connect to profile

  //payments options

  //get hooks from core

  return (
    <Modal
      title="payment"
      closeEsc
      {...{
        isOpen,
        closeModal,
        setIsOpen,
      }}>
      {/* rephrase section */}
      <div>the network, and the price and approve button</div>
    </Modal>
  );
}
