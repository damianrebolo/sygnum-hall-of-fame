import { TableQuery } from "../.graphclient";

export interface ITable {
  rank?: number;
  address: string;
  tokens: number;
}

export const cutAddress = (address: string) =>
  `${address?.substring(0, 6)}...${address?.substring(address?.length - 4)}`;

const mapReducedData = (item: ITable, idx: number) => ({
  rank: idx + 1,
  address: item.address,
  tokens: item.tokens,
});

export const reduceDataTable = (data: TableQuery): ITable[] => {
  return data.users
    .reduce(
      (prev: ITable[], { id, tokens }) => [
        ...prev,
        {
          address: id,
          tokens: tokens.reduce((prev: number, { amount }) => (prev += Number(amount)), 0),
        },
      ],
      []
    )
    .sort((a, b) => b.tokens - a.tokens)
    .map(mapReducedData);
};

export const getUserRow = (data: ITable[], address: string | undefined) => {
  return data.find((item) => item.address === address);
};
