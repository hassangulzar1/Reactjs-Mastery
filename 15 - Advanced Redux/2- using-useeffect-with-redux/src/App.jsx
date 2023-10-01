import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const counterToggle = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
      {counterToggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
