import { IUser } from "../../utils";

export const TableMessages = (address: string | undefined, userRow: IUser | undefined) => {
  if (address && userRow && userRow.canClaim) {
    return (
      <h4 className="max-w-4xl text-4xl text-center">
        <span className="text-rose-700">Top</span> Five
      </h4>
    );
  } else if (address && !userRow) {
    return (
      <p className="flex flex-col gap-3 max-w-4xl text-4xl text-center">
        <span>You have collected</span>
        <span className="text-rose-700">0 Tokens</span>
      </p>
    );
  } else if (address && userRow) {
    return (
      <p className="flex flex-col gap-3 max-w-4xl text-4xl text-center">
        <span>
          You're in <span className="text-rose-700">position {userRow.rank}</span> and
        </span>
        <span>
          have collected <span className="text-rose-700">{userRow.tokens} tokens</span>
        </span>
      </p>
    );
  }
  return (
    <p className="flex flex-col gap-3 max-w-4xl text-4xl text-center">
      <span>
        <span className="text-rose-700">Connect</span> to see
      </span>
      <span>your ranking</span>
    </p>
  );
};
