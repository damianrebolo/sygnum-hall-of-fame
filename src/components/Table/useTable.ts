import { useAddress } from "@thirdweb-dev/react";
import { useQuery } from "react-query";

import { getBuiltGraphSDK } from "../../.graphclient";
import { getUserRow, reduceDataTable } from "../../utils";

const sdk = getBuiltGraphSDK();

export const useTable = () => {
  const address = useAddress();

  const result = useQuery("TableQuery", () => sdk.Table());

  const { data, isLoading, error } = result;
  const tableData = data ? reduceDataTable(data) : undefined;
  const userRow = tableData && address ? getUserRow(tableData, address) : undefined;

  return { data: tableData, isLoading, error, address, userRow };
};
