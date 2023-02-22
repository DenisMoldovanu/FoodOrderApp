import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCardBtn.module.css'
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCardBtn = (props) => {

   const cartCtx = useContext(CartContext);


   const numberOfCartItems = cartCtx.items.reduce((curentNumber, item) => {
    return curentNumber + item.amount
   }, 0);

    return(
        <Fragment>
        <button className={classes.button} onClick={props.showCart}>
        <span className={classes.icon}>
        <CartIcon/>
        </span>

        <span>Your Cart</span>

        <span className={classes.badge}>
        {numberOfCartItems}
        </span >
        </button>

        </Fragment>
    )
}

export default HeaderCardBtn;