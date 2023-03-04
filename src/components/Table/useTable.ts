import { useQuery } from "react-query";

import { getBuiltGraphSDK } from "../../.graphclient";
import { reduceDataTable } from "../../utils";

const sdk = getBuiltGraphSDK();

export const useTable = () => {
  const result = useQuery("TableQuery", () => sdk.Table());

  const { data, isLoading, error } = result;

  return { data: data ? reduceDataTable(data) : null, isLoading, error };
};
