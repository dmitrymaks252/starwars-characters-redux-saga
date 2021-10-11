import { call, put, takeEvery, take, select, fork } from "redux-saga/effects";
import axios from "axios";
import { LOCATION_CHANGE } from "connected-react-router";
import { LOAD_USERS, LOAD_USERS_SUCCESS } from "../../reducers/people/actions";
import { selectPeople } from "../../reducers/people/selectors";
import { matchPath } from "react-router";
import { getRoutesConfig, MAIN_ROUTE, PEOPLE_DETAILS_ROUTE } from "../../routes";
import {
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_FAILURE,
  LOAD_USER_DETAILS_SUCCESS
} from "../../reducers/peopleDetails/actions";

export function* loadPeopleDetails({payload}) {
  const {id} = payload;

  try {
    const {data} = yield call(axios, `https://swapi.dev/api/people/${id}`);

    yield put({
      type: LOAD_USER_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_DETAILS_FAILURE,
      payload: error
    });
  }


}

export function* loadPeopleList({payload}) {
  const {page, search} = payload;
  const {data} = yield call(axios, `https://swapi.dev/api/people?page=${page}&search=${search}`);
  yield put({
    type: LOAD_USERS_SUCCESS,
    payload: data
  });
}

export function* routeChangeSaga() {

  while (true) {
    const action = yield take(LOCATION_CHANGE);

    if (matchPath(action.payload.location.pathname, getRoutesConfig(MAIN_ROUTE))) {
      const state = yield select(selectPeople);
      const {page, search} = state;

      yield put({
        type: LOAD_USERS,
        payload: {
          page,
          search
        }
      });
    }

    const detailsPage = matchPath(action.payload.location.pathname, getRoutesConfig(PEOPLE_DETAILS_ROUTE));
    if (detailsPage) {
      const {id} = detailsPage.params;

      if (id) {
        yield put({
          type: LOAD_USER_DETAILS,
          payload: {
            id
          }
        });
      }
    }
  }
}

export default function* peopleSaga() {
  yield fork(routeChangeSaga);
  yield takeEvery(LOAD_USERS, loadPeopleList);
  yield takeEvery(LOAD_USER_DETAILS, loadPeopleDetails);
}