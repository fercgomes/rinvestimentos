import { all, put, takeEvery } from 'redux-saga/effects';
import { api } from '../../service/api';
import {
  updateStockStateError,
  updateStockStateInit,
  updateStockStateSuccess,
} from './actions';
import { AssetTrackActionTypes, UPDATE_STOCK_STATE } from './types';

type QuoteResponse = {
  price: {
    regularMarketPrice: number;
  };
};

function* updateStockStateSaga(action: AssetTrackActionTypes) {
  if ('ticker' in action) {
    console.info(`Updating stock state [${action.ticker}]`);
    yield put(updateStockStateInit());
    try {
      const res: QuoteResponse = yield api.getQuote(action.ticker);
      console.log('REsponse', res);

      yield put(
        updateStockStateSuccess({
          ticker: action.ticker,
          price: 0,
          rawData: res,
        }),
      );
    } catch (err) {
      console.error(err);
      if (err.response) yield put(updateStockStateError(err.response.message));
      else yield put(updateStockStateError('Could not reach server'));
    }
  } else {
    throw new Error('Invalid action');
  }
}

export function* watchAssetTracker() {
  yield all([takeEvery(UPDATE_STOCK_STATE, updateStockStateSaga)]);
}
