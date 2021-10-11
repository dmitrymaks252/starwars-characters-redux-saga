import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import reducer, { history } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
);

sagaMiddleware.run(rootSaga);

export default store;