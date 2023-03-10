
import classes from './MealsItemForm.module.css'
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealsItemForm = (props) => {
 
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = event => {
        event.preventDefault();

        const eneteredAmount = amountInputRef.current.value;
        const eneterAmountNumber = +eneteredAmount 
        
        if(eneteredAmount.trim().length === 0 || eneterAmountNumber < 1 || eneterAmountNumber > 5){
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(eneterAmountNumber);
    }

    return(
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
            label="Amount" input={{
            id: 'amount_' + props.id,
            type: 'number',
            min:'1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}  />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
    )
}

export default MealsItemForm;