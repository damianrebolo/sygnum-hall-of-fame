import { ITable } from "../../utils";

export const TableMessages = (address: string | undefined, userRow: ITable | undefined, claim: boolean) => {
  if (address && claim) {
    return (
      <h4 className="max-w-4xl text-4xl text-center">
        <span className="text-rose-700">Top</span> Five
      </h4>
    );
  } else if (address && !userRow) {
    return (
      <h4 className="max-w-4xl text-4xl text-center">
        You have collected <br />
        <span className="text-rose-700">0 Tokens</span>
      </h4>
    );
  } else if (address && userRow) {
    return (
      <h4 className="max-w-4xl text-4xl text-center">
        You're in <span className="text-rose-700">position {userRow.rank}</span> and <br />
        have collected <span className="text-rose-700">{userRow.tokens} tokens</span>
      </h4>
    );
  }

  return (
    <h4 className="max-w-4xl text-4xl text-center">
      <span className="text-rose-700">Connect</span> to see <br />
      your ranking
    </h4>
  );
};
