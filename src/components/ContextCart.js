import React,{useContext} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { AppContext } from './Cart';
import Items from './Items';

const ContextCart = () => {
    const {item, clearCart,totalItem,totalAmount } = useContext(AppContext);
    // const {clearCart} = useContext(AppContext);
//     let arr, arr_size;
//     const thirdLargest=(arr, arr_size)=>{

//     let third = Number.MIN_VALUE;
//     for ( let i = 0; i < arr_size ; i++)
//         if (arr[i] > third)
//             third = arr[i];
 
//     console.log("The third Largest element is ", third);
// }
// // sizeof(arr[0]);
// const result=()=>
// {
//      arr = [12, 13, 1, 10, 34, 16,89999];
//     let n = arr.length
//     thirdLargest(arr, n);
//     return 0;
// }


    if(item.length==0){
      return(
        <>
            <header>
        <div className='continue-shopping'>
            <img src='./images/arrow.png' alt='arrow' className='arrow-icon'/>
            <h3>Continue Shopping</h3>
               </div>   
            <div className='cart-icon'>
                <img src='./images/cart.png' alt='cart' className=''/>
                <p>0</p>
            </div>   
    </header>  
    <section className='main-cart-section'>
        <h1>Shopping cart</h1>
        <p className='total-items'>You have <span className='total-items-count'>0</span> items in the cart</p>
   
    </section>   
        </>
      )
    }

    return(
       <>
         <header>
        <div className='continue-shopping'>
            <img src='./images/arrow.png' alt='arrow' className='arrow-icon'/>
            <h3>Continue Shopping</h3>
               </div>   
            <div className='cart-icon'>
                <img src='./images/cart.png' alt='cart' className=''/>
                <p>7</p>
            </div>   
    </header>  
    <section className='main-cart-section'>
        <h1>Shopping cart</h1>
        <p className='total-items'>You have <span className='total-items-count'>{totalItem}</span> items in the cart</p>
   
        <div className="cart-items">
         <div className="cart-items-container">
       <Scrollbars>
    
            {   
                item.map((data)=>{
                    return <Items key={data.id} {...data}/>         
                })
            }
                

          {/* END */}

       </Scrollbars>

         </div>
        
    </div>
   
    <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount} RS</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
    </section>   
       </>
       );
};

export default ContextCart;
