import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FaCircleChevronUp, FaCircleChevronDown } from "react-icons/fa6";
import networkStore, { EVM_NETWORK } from "@/store/network-store";
import { useSwitchNetwork } from "wagmi";
import authStore from "@/store/auth-store";
//

export default function NetworkSelect() {
  // const [selected, setSelected] = useState(EVM_NETWORK[0]);

  const { selectedNetwork, setNetwork } = networkStore();
  const { switchNetwork } = useSwitchNetwork();
  const { setModalReveal } = authStore();

  return (
    <div className=" bg-gray-900 rounded-md top-16 w-72">
      {/* IF PROFILES SELECT EMPTY -> show not connected */}
      <Listbox
        value={selectedNetwork}
        onChange={(v) => {
          if (v?.type === "starknet") {
            // check connector not --> useAccount or checkLengthProfile
            let starknetConnected = true; // replace later
            if (!starknetConnected) {
              setModalReveal(true); // modal reveal ONYL STARKNET?
            }

            setNetwork(v);
          } else {
            // if already connect to  wallet
            switchNetwork(v?.chainId);
            setNetwork(v);
          }
        }}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedNetwork.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FaCircleChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {EVM_NETWORK.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <FaCircleChevronUp
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
