import  {createStore,applyMiddleware,combineReducers} from "redux"
import thunkMiddleware from "redux-thunk"
import AuthReducer  from "./reducers/AuthReducer"
import {composeWithDevTools} from "redux-devtools-extension"
const rootReducers = combineReducers({
    AuthReducer
})

const middleWares = [thunkMiddleware]
const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export default Store