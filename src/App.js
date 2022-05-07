import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  const products = "Product List"
    const productsCounter = "Total Counter = 1"
  return (
    <div className="App">
        <Header/>
        <ItemListContainer greeting="Example text" products= {products} productsCounter={productsCounter}/>
    </div>
  );
}

export default App;
