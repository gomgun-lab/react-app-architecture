import logo from "./logo.svg";
import "./App.css";
import FilterableProductTable from "./component/FilterableProductTable";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <FilterableProductTable />
      </div>
    </div>
  );
}

export default App;
