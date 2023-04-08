import { combineReducers } from "redux";
//reducers
import { coinListReducer } from './coinList/coinList.reducer'

export const reducers = combineReducers({
    coinList: coinListReducer,
})