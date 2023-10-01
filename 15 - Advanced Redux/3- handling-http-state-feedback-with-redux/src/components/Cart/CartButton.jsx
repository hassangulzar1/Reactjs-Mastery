import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalCartItems = useSelector((state) => state.cart.totalQuantity);

  const myCartToggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={myCartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
