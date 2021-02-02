import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from "../Redux/Contacts/contacts-reducer";
import authReducer from "../Redux/UserAuth/auth-slice";

const persistConfig = {
  key: "users",
  storage,
  whitelist: ["token"],
};

// const rootReducer = combineReducers({
//   user: persistReducer(persistConfig, authReducer),

//   contacts: contactReducer,
// });

export const store = configureStore({
  reducer: {
    users: persistReducer(persistConfig, authReducer),
    contacts: contactReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
