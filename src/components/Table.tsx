interface ITable {
  rank: number;
  address: string;
  tokens: number;
}

export const Table: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => (
  <div className="flex flex-col items-center w-full mt-24">
    <div className="grid grid-cols-12 w-[652px] border border-violet-300 rounded-lg px-6 py-1 bg-gradient-to-b from-violet-500 to-violet-400 text-sm">
      <div className="col-span-3 leading-5">Rank</div>
      <div className="col-span-6 leading-5">Address</div>
      <div className="col-span-3 leading-5">Tokens</div>
    </div>
    {[].map((item: ITable) => (
      <div
        key={item.rank}
        className="grid grid-cols-12 w-[652px] border border-violet-300 rounded-lg px-6 py-2 mt-2 bg-gradient-to-b from-blue-600 to-blue-500"
      >
        <div className="col-span-3 leading-5">{`${item.rank}.`}</div>
        <div className="col-span-6 leading-5">{item.address}</div>
        <div className="col-span-3 leading-5">{item.tokens}</div>
      </div>
    ))}
  </div>
);
