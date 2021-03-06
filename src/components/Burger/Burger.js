import React from 'react'
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngreients=Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    // console.log(Array(props.ingredients.salad));
    if(transformedIngreients.length===0){
        transformedIngreients=<p>Please Start Adding Ingredients!</p>
    }
  return (
    <div className={classes.Burger}>
    <BurgerIngredient type='bread-top'/>
    {transformedIngreients}
    <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default burger