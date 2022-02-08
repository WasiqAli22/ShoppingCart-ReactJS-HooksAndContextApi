export const reducer=(state,action)=>{
   if(action.type==="REMOVE_ITEM"){
       return{
           ...state,
           item:state.item.filter((currItem)=>{
               return currItem.id !== action.payload;
           }),
       };
   }

   if(action.type === "CLEAR_CART") {
       return{
           ...state,
           item:[]
       };
   }
   if(action.type==="INCREMENT_ITEM"){
       let updateCart=state.item.map((currItem)=>{
           if(currItem.id===action.payload){
               return{
                     ...currItem,
                   quantity:currItem.quantity+1};    
           }
           return currItem;
       });
       return {...state,item:updateCart}
   }

   if(action.type==="DECREMENT"){
       let decrementCart=state.item.map((currItem)=>{
           if(currItem.id===action.payload){
               return{...currItem,quantity:currItem.quantity-1}

           }
           return currItem
       }).filter((currItem)=>currItem.quantity!==0)
       return {...state,item:decrementCart}

   }

   if(action.type==="GET_ALL"){
       let {totalItem,totalAmount}=state.item.reduce((accum,currVal)=>{
           let {price,quantity}=currVal;
           let updatedAmount=price*quantity;
           accum.totalItem += quantity;
           accum.totalAmount+=updatedAmount;
           return accum;
       },
       {
           totalItem:0,
           totalAmount:0

       }
       );
       return{...state,totalItem,totalAmount}        
   }

//    if(action.type==="GET_AMOUNT"){
//        let {totalAmount}=state.item.reduce((accum,currVal)=>{
//            let {price}=currVal;
//            accum.totalAmount+=price;
//            return accum;
//        },{totalAmount:0});
//        return {...state,totalAmount}
//    }
    return state;
}