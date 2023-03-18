import { ChainId, useNetwork, useNetworkMismatch } from "@thirdweb-dev/react";
import { useCallback } from "react";
import { InfoIcon, SwitchIcon } from "../icons";

export const MismatchAlert: React.FC = () => {
  const isMismatched = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const swtichNetwork = useCallback(async () => {
    await switchNetwork?.(ChainId.Polygon);
  }, [switchNetwork]);

  if (!isMismatched) {
    return null;
  }

  return (
    <div className="fixed top-2 left-0 right-0 z-50 w-full max-w-2xl mx-auto p-4 mb-4 border rounded-lg bg-red-500">
      <div className="flex gap-4 items-center mb-2">
        <InfoIcon />
        Network mismatch!
      </div>
      <div className="text-lg font-mono pb-4 px-2">
        Your wallet is connected to the wrong network, please connect it to Polygon!
      </div>
      <button
        className="flex gap-2 items-center border rounded-sm border-white py-2 px-4"
        onClick={() => swtichNetwork()}
      >
        <SwitchIcon />
        <span className="text-lg font-mono">Switch</span>
      </button>
    </div>
  );
};
