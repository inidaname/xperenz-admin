import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@app/api/apiSlice";

import authReducer from "@app/features/auth-slice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  }
})