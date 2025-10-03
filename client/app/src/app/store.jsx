import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import baseApi from "../service/apiSLice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
export default store;