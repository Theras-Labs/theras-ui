import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Modal from "./Modal";
import { Title } from "../Typography";
import SettingBox from "../Box/SettingBox";
// import SettingsTabs from "./settings-tabs";

export default function ModalSettings({
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
      title="settings"
      {...{
        isOpen,
        closeModal,
        setIsOpen,
      }}>
      <div className="mt-18  grid grid-cols-2 w-full">
        {/* tabs */}
        <div className="col-span-1">
          {MOCK_BASIC_SETTINGS?.map((item, i) => (
            <SettingBox key={i} {...item} />
          ))}
        </div>
      </div>
    </Modal>
  );
}

// update controls with keyboard
const MOCK_BASIC_SETTINGS = [
  {
    title: "controls",
    options: [
      {
        title: "keyboard",
        active: true,
      },
      {
        title: "gamepad",
        active: false,
        disable: true,
      },
      {
        title: "touch",
        active: false,
      },
    ],
  },
  {
    title: "graphics",
    options: [
      {
        title: "low",
        active: false,
      },
      {
        title: "medium",
        active: true,
      },
      {
        title: "high",
        active: false,
      },
    ],
  },
  {
    title: "sound",
    options: [
      {
        title: "on",
        active: false,
      },
      {
        title: "off",
        active: true,
      },
    ],
  },
  {
    title: "music",
    options: [
      {
        title: "on",
        active: true,
      },
      {
        title: "off",
        active: false,
      },
    ],
  },
];
