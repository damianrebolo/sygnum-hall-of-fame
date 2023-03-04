import { Alert, Message, Table, Topbar } from "./components";

function App() {
  return (
    <div className="">
      <Topbar />
      <Alert>
        <h4 className="text-lg underline">Claim 3 new tokens now</h4>
      </Alert>
      <Message>
        <h4 className="max-w-4xl text-4xl text-center">
          <span className="text-rose-700">Connect</span> to see <br />
          your ranking
        </h4>
      </Message>
      <Table />
    </div>
  );
}

export default App;
