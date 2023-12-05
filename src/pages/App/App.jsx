import IncrementA from "../../components/IncrementA/IncrementA";
import "./App.css";
import Product from "../../components/Counter/Product";

const App = () => {

  return (
    <>
    <h1>Add and remove from card and valid maxItems number</h1>
    <Product/>
    <h1>Total increment </h1>
    <IncrementA/>
    </>
  );
}

export default App;
  