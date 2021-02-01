import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import contactReducer from "./reducer";

// const persistConfig = {
//   key: "contact",
//   storage,
//   blacklist: ["filter"],
// };

const rootReducer = combineReducers({
  contacts: contactReducer,
  // contacts: persistReducer(persistConfig, contactReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// const storePersistor = { store, persistor };

// export default storePersistor;
export default store;
