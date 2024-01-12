import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import blogReducer from "./slices/blogSlice";
import { persistStore,  persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({
    user: userReducer,
    blogs: blogReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Turn off check for non-serializable values
      }),
});

export const persistor = persistStore(store);