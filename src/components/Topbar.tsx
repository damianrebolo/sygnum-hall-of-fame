import { useMetamask, useDisconnect, useAddress } from "@thirdweb-dev/react";

import logo from "../images/sygnum.png";
import { LoginIcon } from "../icons/login";

export const Topbar: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();

  return (
    <div className="flex flex-row flex-nowrap justify-between items-center h-20 px-14 border-b border-slate-500">
      <div className="flex flex-row flex-nowrap justify-between items-center gap-10">
        <img src={logo} alt="Sygnum" className="h-5 w-auto" />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-violet-500 to-sky-300">
          Hall Of Fame
        </h1>
      </div>
      <button
        onClick={address ? disconnect : connectWithMetamask}
        className="flex flex-row flex-nowrap justify-start items-center gap-3 py-3 px-5 border border-pink-600 rounded-[4px] bg-pink-600 hover:bg-pink-700 bg-opacity-[15%]"
      >
        <LoginIcon />
        <span className="text-lg font-mono">{address ? "Disconnect" : "Connect"}</span>
      </button>
    </div>
  );
};
