import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../featchers/user/userSlice"
import orderSlice from "../featchers/order/orderSlice"
export const store=configureStore({
    reducer:{
        user:userSlice,
        order:orderSlice
    }
})