import { applyMiddleware, createStore } from "redux";
import { reducers } from './index.reducers';
import createSagaMiddleware from "redux-saga";
import { rootSagas } from "./index.sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas)