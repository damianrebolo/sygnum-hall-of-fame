import { useAddress } from "@thirdweb-dev/react";
import { useQuery } from "react-query";

import { getBuiltGraphSDK } from "../../.graphclient";
import { getUserRow, reduceDataTable } from "../../utils";

const sdk = getBuiltGraphSDK();

export const useUsers = () => {
  const address = useAddress();

  const result = useQuery("UsersQuery", () => sdk.Users());

  const { data, isLoading, error } = result;
  const tableData = data ? reduceDataTable(data) : undefined;
  const userRow = tableData && address ? getUserRow(tableData, address?.toLowerCase()) : undefined;

  return { data: tableData, isLoading, error, address, userRow };
};
