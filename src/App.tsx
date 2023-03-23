import { DotSnakeAnimation, Message, MismatchAlert, Table, Topbar } from "./components";
import { ClaimTokens } from "./components/ClaimTokens/ClaimTokens";
import { TableMessages } from "./components/Table/TableMessages";
import { useUsers } from "./components/Table/useUsers";
import { cutAddress, IUser } from "./utils";

function App() {
  const { data, address, userRow } = useUsers();

  return (
    <div className="">
      <DotSnakeAnimation />
      <MismatchAlert />
      <Topbar />
      {userRow?.canClaim && <ClaimTokens />}
      <Message>{TableMessages(address, userRow)}</Message>
      <Table>
        {data?.map((item: IUser) => (
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
      </Table>
    </div>
  );
}

export default App;