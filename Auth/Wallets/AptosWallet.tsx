import React, { useEffect, useState } from "react";
import {
  useWallet,
  WalletReadyState,
  Wallet,
  isRedirectable,
  WalletName,
} from "@aptos-labs/wallet-adapter-react";
import { profileStore } from "@/_core/hooks/useProfile";
import { shortenEthAddress, shortenString } from "@/utils/ethaddress";
import Avatar from "@/_ui/profile/avatar";
import { GravatarUrl } from "@/utils/Gravatar";
import SimpleProfileCard from "@/_ui/profile/SimpleProfileCard";

export default function AptosWallet() {
  return (
    <div className=" bg-gradient-to-r from-black to-gray-500 p-4  my-2 rounded-md  ">
      <div className="text-center font-bold uppercase ">Aptos Wallet</div>
      <div className="flex p-4  rounded-md  justify-center  ">
        <WalletButtons />
      </div>
    </div>
  );
}
export const CHAIN_NAME_APTOS = "Aptos";
export const WalletButtons = () => {
  const { wallets, connected, isLoading } = useWallet();

  if (connected) {
    // profile aptos -> TGEM balances, NFTs ? etc
    // BE -> last game etc?
    return <ProfileAptos />;
  }

  if (isLoading || !wallets[0]) {
    return <div className={"opacity-50 cursor-not-allowed"}>Loading...</div>;
  }

  return <WalletView wallet={wallets[0]} />;
};

const ProfileAptos = () => {
  const [currentProfile, setProfile] = useState(null);
  const { getProfileProvider, removeProfile, profiles } = profileStore();
  const { wallets, connected, disconnect, isLoading, account } = useWallet();

  useEffect(() => {
    const _profileNow = getProfileProvider("move");
    setProfile(_profileNow);
  }, [account]);
  // load BE and get profile name?
  if (!currentProfile) return null;

  return (
    <div className="w-full md:flex items-center  justify-center">
      <SimpleProfileCard
        {...{
          currentProfile,
          onDisconnect: () => {
            disconnect();
            removeProfile(currentProfile);
            setProfile(null);
          },
        }}
      />
    </div>
  );
};

const WalletView = ({ wallet }: { wallet: Wallet }) => {
  const { account, connect } = useWallet();
  const isWalletReady =
    wallet.readyState === WalletReadyState.Installed ||
    wallet.readyState === WalletReadyState.Loadable;
  const mobileSupport = wallet.deeplinkProvider;

  const onWalletConnectRequest = async (walletName: WalletName) => {
    try {
      await connect(walletName);
    } catch (error) {
      console.warn(error);
      window.alert("Failed to connect wallet");
    }
  };

  /**
   * If we are on a mobile browser, adapter checks whether a wallet has a `deeplinkProvider` property
   * a. If it does, on connect it should redirect the user to the app by using the wallet's deeplink url
   * b. If it does not, up to the dapp to choose on the UI, but can simply disable the button
   * c. If we are already in a in-app browser, we don't want to redirect anywhere, so connect should work as expected in the mobile app.
   *
   * !isWalletReady - ignore installed/sdk wallets that don't rely on window injection
   * isRedirectable() - are we on mobile AND not in an in-app browser
   * mobileSupport - does wallet have deeplinkProvider property? i.e does it support a mobile app
   */
  if (!isWalletReady && isRedirectable()) {
    // wallet has mobile app
    if (mobileSupport) {
      return (
        <button
          className={"hover:bg-blue-700"}
          disabled={false}
          key={wallet.name}
          onClick={() => onWalletConnectRequest(wallet.name)}
          style={{ maxWidth: "300px" }}>
          Connect Wallet
        </button>
      );
    }
    // wallet does not have mobile app
    return (
      <button
        className={"opacity-50 cursor-not-allowed"}
        disabled={true}
        key={wallet.name}
        style={{ maxWidth: "300px" }}>
        Connect Wallet - Desktop Only
      </button>
    );
  } else {
    // desktop
    return (
      <button
        className={
          isWalletReady ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
        }
        disabled={!isWalletReady}
        key={wallet.name}
        onClick={() => onWalletConnectRequest(wallet.name)}
        style={{ maxWidth: "300px" }}>
        {wallet?.icon ? (
          <>
            <img src={wallet?.icon} className="w-12 h-12" />
            {/* {wallet?.name} */}
          </>
        ) : (
          "Connect Wallet"
        )}
        {/* {wallet?.name} */}
      </button>
    );
  }
};
