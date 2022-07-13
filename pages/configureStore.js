import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./modules";


const isProduction = process.env.NODE_ENV === "production";


const makeStore = () => {
  const enhancer = isProduction
    ? compose(applyMiddleware(thunk))
    : composeWithDevTools(applyMiddleware(thunk));
  const store = createStore(rootReducer, enhancer);
  return store;
};


const wrapper = createWrapper(makeStore, { debug: !isProduction });


export default wrapper;