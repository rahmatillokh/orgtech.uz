import Navbar from "@/components/navbar/Navbar";
import Product from "./components/product/Product";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Product />
      </div>
    </div>
  );
};

export default App;
