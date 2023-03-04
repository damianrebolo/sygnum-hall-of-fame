import { Alert, Carousel, Message, Table, Topbar } from "./components";

import { ranking } from "./mocks";

function App() {
  return (
    <div className="">
      <Topbar />
      <Alert>
        <h4 className="text-lg underline">Claim 3 new tokens now</h4>
      </Alert>
      {/* <Carousel /> */}
      <Message>
        <h4 className="max-w-4xl text-4xl text-center">
          <span className="text-rose-700">Connect</span> to see <br />
          your ranking
        </h4>
      </Message>
      <Table rows={ranking} />
    </div>
  );
}

export default App;
