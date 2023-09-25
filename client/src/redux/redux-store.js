import {applyMiddleware,  combineReducers , compose,  legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import ProfileReducer from "./profileReducer";
import HeroesReducer from "./heroesReduser";
import AppReducer from "./appReducer";
let reducers = combineReducers(
    {
        profilepage: ProfileReducer,
        heroespage: HeroesReducer,
        app: AppReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore (reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store=store;

export default store;