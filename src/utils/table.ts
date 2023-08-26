import { UsersQuery } from "../.graphclient";

export interface IUser {
  rank?: number;
  address: string;
  canClaim: boolean;
  tokens: number;
}

export const cutAddress = (address: string) =>
  `${address?.substring(0, 6)}...${address?.substring(address?.length - 2)}`;

const mapReducedData = ({ address, canClaim, tokens }: IUser, idx: number) => ({
  rank: idx + 1,
  address: address.toLocaleLowerCase(),
  canClaim,
  tokens,
});

export const reduceDataTable = (data: UsersQuery): IUser[] =>
  data.users
    .reduce(
      (prev: IUser[], { id, canClaim, tokens }) => [
        ...prev,
        {
          address: id,
          canClaim,
          tokens: tokens.reduce((prev: number, { amount }) => (prev += Number(amount)), 0),
        },
      ],
      []
    )
    .sort((a, b) => b.tokens - a.tokens)
    .map(mapReducedData);

export const getUserRow = (data: IUser[], address: string | undefined) => {
  return data.find((item) => item.address === address);
};
