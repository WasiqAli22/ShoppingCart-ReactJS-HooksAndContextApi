import React,{createContext, useReducer,useEffect} from 'react';
import './cart.css';
import {products} from './product';
import ContextCart from './ContextCart';
import { reducer } from '../reducer';

export const AppContext=createContext();

const initialState={
    item:products,
    totalAmount:0,
    totalItem:0
}

const Cart = () => {
    // const [item, setitem] = useState(products);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type:"GET_ALL"})
        console.log('CALLING ')
    }, [state.item]);
    

    const decrement=(id)=>{
        return dispatch({
            type:"DECREMENT",
            payload:id
        })
    }


    const increment=(id)=>{
        return dispatch({
          type:"INCREMENT_ITEM",
          payload:id
    
        });
      }

    const removeItem=(id)=>{
        return dispatch({
            type:"REMOVE_ITEM",
            payload:id
        });
    };
    const clearCart=()=>{
        return dispatch({
            type:"CLEAR_CART"});
    };
  return (
  <>
  <AppContext.Provider value={{...state,removeItem,clearCart,increment,decrement}}>
       <ContextCart/>
  </AppContext.Provider>
  

  
  </>
  );
};

export default Cart;
