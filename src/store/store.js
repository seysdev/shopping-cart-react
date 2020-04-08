import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { allReducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

// export default () => {
//   let store = createStore(persistedReducer, composeWithDevTools());
//   let persistor = persistStore(store);
//   return { store, persistor };
// };

let store = createStore(persistedReducer, composeWithDevTools());
let persistor = persistStore(store);
export { store, persistor };

// const store = createStore(allReducers, composeWithDevTools());

// export { store };
