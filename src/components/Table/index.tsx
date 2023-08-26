export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Table: React.FC<TableProps> = ({ children }) => (
  <div className="flex flex-col items-center w-full mt-24 z-20 px-2 sm:px-0">
    <div className="bg-sygnum-sky">
      <div className="grid grid-cols-12 sm:min-w-[640px] max-w-[652px] border border-violet-300 rounded-lg px-6 py-1 bg-gradient-to-b from-violet-600 to-violet-400 text-sm">
        <div className="col-span-3 leading-5">Rank</div>
        <div className="col-span-6 leading-5">Address</div>
        <div className="col-span-3 leading-5 justify-self-end sm:justify-self-center">Tokens</div>
      </div>
      {children}
    </div>
  </div>
);
