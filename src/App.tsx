import { Message, MismatchAlert, Table, Topbar, Layout, SnakeGame } from "./components";
import { ClaimTokens } from "./components/ClaimTokens/ClaimTokens";
import { StarAnimation } from "./components";
import { TableMessages } from "./components/Table/TableMessages";
import { useUsers } from "./components/Table/useUsers";
import { cutAddress, IUser } from "./utils";
function App() {
  const { data, address, userRow } = useUsers();

  return (
    <>
      {/* <SnakeGame topOffset={80} position="left_bottom" />
      <SnakeGame topOffset={80} position="right_top" /> */}
      <StarAnimation />
      <Layout>
        <MismatchAlert />
        <Topbar />
        {userRow?.canClaim && <ClaimTokens />}
        <Message>{TableMessages(address, userRow)}</Message>
        <Table>
          {data?.map((item: IUser) => (
            <div
              key={item.rank}
              className={`grid grid-cols-12  max-w-[652px] border border-violet-300 rounded-lg px-6 py-2 mt-2 ${
                address && address === item.address
                  ? "bg-gradient-to-b from-rose-600 to-rose-400"
                  : "bg-gradient-to-b from-blue-600 to-blue-400"
              }`}
            >
              <div className="col-span-3 leading-5 text-sm">{`${item.rank || 0}.`}</div>
              <div className="col-span-6 leading-5 text-xs sm:text-sm">{cutAddress(item.address)}</div>
              <div className="col-span-3 leading-5 text-sm justify-self-end sm:justify-self-center">{item.tokens}</div>
            </div>
          ))}
        </Table>
      </Layout>
    </>
  );
}

export default App;
