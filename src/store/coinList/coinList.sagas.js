import { put } from "redux-saga/effects";
import { getCoin } from "../../services/api";

export function* sagas () {
    try {
        yield put({
            type: "SET_LOADING",
            payload: true,
        })
        const data = yield getCoin()
        yield put({
            type: "SET_DATA",
            payload: data,
        })
        yield put({
            type: "SET_LOADING",
            payload: false,
        })
        return data;
    } catch (error) {
        
    }
}