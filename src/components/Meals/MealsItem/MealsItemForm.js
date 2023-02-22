
import classes from './MealsItemForm.module.css'

const MealsItemForm = (props) => {

    const price = `$ ${props.price.toFixed(2)}`;

    return(
    <form className={classes.form}>
        <input type="text" />
        <button>+ Add</button>
      
    </form>
    )
}

export default MealsItemForm;