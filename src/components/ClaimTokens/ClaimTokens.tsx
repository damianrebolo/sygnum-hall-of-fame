import { useAddress } from "@thirdweb-dev/react";
import { useContractWrite, useContract } from "@thirdweb-dev/react";

import { Alert } from "../Alert";

export const ClaimTokens = () => {
  const address = useAddress();
  const { contract } = useContract("0x88e74675186c02a75481FaC552c7Db03f4DC849e");
  const { mutateAsync } = useContractWrite(contract, "mint");

  const onClaimTokens = () => {
    mutateAsync([address])
      .then(() => console.log("Tokens Claimed"))
      .catch(() => console.error("Error claiming tokens"));
  };

  return (
    <Alert>
      <h4 onClick={onClaimTokens} className="text-lg underline cursor-pointer">
        Claim your tokens now
      </h4>
    </Alert>
  );
};
