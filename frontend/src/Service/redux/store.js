import { configureStore } from "@reduxjs/toolkit";

import rateReducer from "../redux/reducers/rate"
import authReducer from "../redux/reducers/auth"
import serviceprovider from '../redux/reducers/serviceprovider'
import bookingReduser from "../redux/reducers/booking"
export default configureStore({
    reducer:{
        auth: authReducer,
        service: serviceprovider,
        rates: rateReducer,
         booking : bookingReduser,
    }
})


