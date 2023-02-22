import { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCardBtn.module.css'

const HeaderCardBtn = (props) => {


    return(
        <Fragment>
        <button className={classes.button} onClick={props.showCart}>
        <span className={classes.icon}>
        <CartIcon/>
        </span>

        <span>Your Cart</span>

        <span className={classes.badge}>
            3
        </span >
        </button>

        </Fragment>
    )
}

export default HeaderCardBtn;