import logo from "./images/sygnum.png";
import { LoginIcon } from "./icons/login";
import { ranking } from "./mocks";

function App() {
  return (
    <div className="">
      {/* topbar */}
      <div className="flex flex-row flex-nowrap justify-between items-center h-20 px-14 border-b border-slate-500">
        <div className="flex flex-row flex-nowrap justify-between items-center gap-10">
          <img src={logo} alt="Sygnum" className="h-5 w-auto" />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-violet-500 to-sky-300">
            Hall Of Fame
          </h1>
        </div>
        <div className="flex flex-row flex-nowrap justify-center items-center gap-3 py-3 px-5 border border-pink-600 rounded-[4px] bg-pink-600 bg-opacity-[15%]">
          <LoginIcon />
          <span>Connect</span>
        </div>
      </div>

      {/* message */}
      <div className="flex justify-center w-full mt-24">
        <h4 className="max-w-4xl text-4xl text-center">
          <span className="text-rose-700">Connect</span> to see <br />
          your ranking
        </h4>
      </div>

      {/* table */}
      <div className="flex flex-col items-center w-full mt-24">
        <div className="grid grid-cols-12 w-[652px] border border-violet-300 rounded-lg px-6 py-1 bg-gradient-to-b from-violet-500 to-violet-400 text-sm">
          <div className="col-span-3 leading-5">Rank</div>
          <div className="col-span-6 leading-5">Address</div>
          <div className="col-span-3 leading-5">Tokens</div>
        </div>
        {ranking.map((item) => (
          <div className="grid grid-cols-12 w-[652px] border border-violet-300 rounded-lg px-6 py-2 mt-2 bg-gradient-to-b from-blue-600 to-blue-500">
            <div className="col-span-3 leading-5">{`${item.rank}.`}</div>
            <div className="col-span-6 leading-5">{item.address}</div>
            <div className="col-span-3 leading-5">{item.tokens}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
