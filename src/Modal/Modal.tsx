import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Title } from "../Typography";
// import SettingsTabs from "./settings-tabs";

export default function Modal({
  closeModal = () => {},
  isOpen = false,
  setIsOpen = () => {},
  className = "",
  children,
  classNameBg = "",
  closeBg = false,
  closeEsc = false,
  classNamePanel = "",
  title = "",
  defaultTitle = true,
  defaultCloseButton = true,
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => (closeEsc ? closeModal() : null)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 " />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`flex min-h-full  backdrop-blur-md ${classNameBg}`}
              onClick={() => (closeBg ? closeModal() : null)}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel
                  className={`
                  w-full h-screen transform 
                  overflow-hidden bg-[#00000053]
                  p-2 md:p-10 
                  shadow-xl transition-all ${classNamePanel}`}>
                  <div className="flex justify-between w-full mb-2">
                    <div className="hidden md:block" />
                    {defaultTitle && (
                      <Title className="!font-bold capitalize">{title}</Title>
                    )}
                    {defaultCloseButton && (
                      <button
                        onClick={closeModal}
                        type="button"
                        className="inline-flex uppercase justify-center  border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium border-white rounded-full hover:text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Close
                      </button>
                    )}
                  </div>

                  {React.Children.map(children, (child: any) =>
                    React.cloneElement(child, { isOpen, closeModal, setIsOpen })
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
