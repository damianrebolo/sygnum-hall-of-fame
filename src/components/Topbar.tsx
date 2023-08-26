import { ConnectWallet } from "@thirdweb-dev/react";

import logo from "../assets/images/sygnum.png";

export const Topbar: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div className="flex flex-row flex-nowrap justify-between items-center h-20 px-3 sm:px-14 border-b border-slate-500">
      <div className="flex flex-row flex-nowrap justify-between items-center gap-10">
        <img src={logo} alt="Sygnum" className="h-5 w-auto" />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-violet-500 to-sky-300 invisible sm:visible">
          Hall Of Fame
        </h1>
      </div>
      <ConnectWallet btnTitle="Connect" />
    </div>
  );
};
