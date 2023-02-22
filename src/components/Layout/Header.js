import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCardBtn from "./HeaderCardBtn";

const Header = (props) => {


    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardBtn showCart={props.onShowCartHandler}/>
            </header>
            <div className={classes['main-image']}>
            <img src={mealsImage} alt="food" />
            </div>

        </Fragment>
    )
}

export default Header;