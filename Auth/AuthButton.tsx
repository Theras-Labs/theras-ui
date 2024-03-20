import React from "react";
import { useAccount } from "wagmi";
import ModalConnect from "./modal-connect";
import Profile from "./Profile";
import StarknetWallet, { shortenString } from "./wallets/starknet-wallet";
import authStore from "@/store/auth-store";
// import ModalAuth from "./modal-auth";
import Avatar from "@/_ui/profile/avatar";
import { GravatarUrl } from "@/utils/Gravatar";
import { shortenEthAddress } from "@/utils/ethaddress";
import useProfile, { profileStore } from "@/_core/hooks/useProfile";
import ModalLogin from "./ModalLogin";
import SimpleProfileCard from "../profile/SimpleProfileCard";
import Slider from "../Slider/Slider";
import SliderProfile from "../Slider/SliderProfile";

// ButtonAuth
// shows profile or shows button connect
// use ID game to load
export default function AuthButton() {
  useProfile();
  const { profiles, setModalLogin, isModalLogin } = profileStore();
  // console.log(profiles, "profiles");

  return (
    <div className="absolute">
      {/* wallet */}
      {/* if !auth.length  OPEN MODAL BUTTON else: Profiles */}
      {!profiles?.length ? (
        <>
          <button
            type="button"
            className="bg-red-500 border p-4 rounded-full  uppercase text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setModalLogin(true)}>
            Connect
          </button>
        </>
      ) : (
        <div className=" md:w-90 h-20" onClick={() => setModalLogin(true)}>
          <SliderProfile data={profiles} />
        </div>
      )}
      <ModalLogin
        {...{
          isOpen: isModalLogin,
          setIsOpen: setModalLogin,
          closeModal: () => setModalLogin(false),
        }}
      />
    </div>
  );
}
