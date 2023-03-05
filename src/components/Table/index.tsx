import { cutAddress, ITable } from "../../utils";
import { Message } from "../Message";
import { TableMessages } from "./TableMessages";
import { useTable } from "./useTable";

export const Table: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const { data, isLoading, address, userRow } = useTable();

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Message>{TableMessages(address, userRow, false)}</Message>
      <div className="flex flex-col items-center w-full mt-24">
        <div className="grid grid-cols-12 w-[652px] border border-violet-300 rounded-lg px-6 py-1 bg-gradient-to-b from-violet-600 to-violet-400 text-sm">
          <div className="col-span-3 leading-5">Rank</div>
          <div className="col-span-6 leading-5">Address</div>
          <div className="col-span-3 leading-5">Tokens</div>
        </div>
        {data?.map((item: ITable) => (
          <div
            key={item.rank}
            className={`grid grid-cols-12 w-[652px] border border-violet-300 rounded-lg px-6 py-2 mt-2 ${
              address && address === item.address
                ? "bg-gradient-to-b from-rose-600 to-rose-400"
                : "bg-gradient-to-b from-blue-600 to-blue-400"
            }`}
          >
            <div className="col-span-3 leading-5">{`${item.rank}.`}</div>
            <div className="col-span-6 leading-5">{cutAddress(item.address)}</div>
            <div className="col-span-3 leading-5">{item.tokens}</div>
          </div>
        ))}
      </div>
    </>
  );
};
