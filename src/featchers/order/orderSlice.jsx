import {createSlice} from "@reduxjs/toolkit";
const initialState={
    cartArr:[]
 };
const orderSlice=createSlice({
    name:"orderBag",
    initialState,
    reducers:{
      deleteOneFromBag:(state,action)=>{
        let index=state.cartArr.findIndex(p=>p.id==action.payload.id)
        if (state.cartArr[index].qty>1){
         state.cartArr[index].qty-=1}
       else 
        state.cartArr.splice(index,1)
        } 
        ,  addtoBag: (state, action) => {
            let itemTo = state.cartArr.find((item) => item.id == action.payload.id);
            if (!itemTo) {
              state.cartArr.push({ ...action.payload, qty: 1 });
            } else itemTo.qty+=1
          },
          fullBag:(state,action)=>{
              state.cartArr = action.payload;
      
            },
            emptyBag:(state,action)=>{
              state.cartArr=[]
            }
          }
    
})
export const {addToBag,deleteOneFromBag,addtoBag,fullBag,emptyBag} =orderSlice.actions
export default orderSlice.reducer;
