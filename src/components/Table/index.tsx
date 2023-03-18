export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Table: React.FC<TableProps> = ({children}) =>  (
  <div className="flex flex-col items-center w-full mt-24">
    <div className="grid grid-cols-12 w-[652px] border border-violet-300 rounded-lg px-6 py-1 bg-gradient-to-b from-violet-600 to-violet-400 text-sm">
      <div className="col-span-3 leading-5">Rank</div>
      <div className="col-span-6 leading-5">Address</div>
      <div className="col-span-3 leading-5">Tokens</div>
    </div>
    {children}
  </div>
);
