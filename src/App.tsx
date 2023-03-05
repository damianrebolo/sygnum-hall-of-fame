import { Alert, Message, Table, Topbar } from "./components";

function App() {
  return (
    <div className="">
      <Topbar />
      <Alert>
        <h4 className="text-lg underline">Claim 3 new tokens now</h4>
      </Alert>
      <Table />
    </div>
  );
}

export default App;
