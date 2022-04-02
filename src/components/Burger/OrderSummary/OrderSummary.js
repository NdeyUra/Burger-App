import React from 'react'
import Aux from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary=Object.keys(props.ingredient).map(igKey=>{
        return (<li key={igKey}>
        <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredient[igKey]}
        </li>)
    })
  return (
    <Aux>
     <h3>Your Order</h3>
     <p>A Delicious Burger With The Following Ingredients</p>
     <ul>
     {ingredientsSummary}
     </ul>
     <p><strong>Total Price:Rs {props.price}</strong></p>
     <p>Continue To Checkout?</p>
     <Button clicked={props.purchaseCancelled} btnType='Danger'>CANCEL</Button>
     <Button clicked={props.purchaseContinued} btnType='Success'>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary