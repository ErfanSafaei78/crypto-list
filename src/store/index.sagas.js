import { takeEvery } from "redux-saga/effects"
//Sagas
import { sagas as coinListSaga } from "./coinList/coinList.sagas"

export const rootSagas = function* () {
    yield takeEvery("LOAD_DATA", coinListSaga);
}