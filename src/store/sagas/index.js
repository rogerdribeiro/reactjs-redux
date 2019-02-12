import { all, takeLatest } from 'redux-saga/effects';

import { addFavorite } from './favorites';

export default function* rootSaga() {
  yield all([takeLatest('ADD_FAVORITE_REQUEST', addFavorite)]);
}

// takeLastest - pega a ultima requisição do usuário
// takeEvery - pega todas as requisições
