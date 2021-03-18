import {
  AssetTrackActionTypes,
  StockState,
  UPDATE_STOCK_STATE,
  UPDATE_STOCK_STATE_ERROR,
  UPDATE_STOCK_STATE_INIT,
  UPDATE_STOCK_STATE_SUCCESS,
} from "./types";

export function updateStockState(ticker: string): AssetTrackActionTypes {
  return {
    type: UPDATE_STOCK_STATE,
    ticker: ticker,
  };
}

export function updateStockStateInit(): AssetTrackActionTypes {
  return {
    type: UPDATE_STOCK_STATE_INIT,
  };
}

export function updateStockStateSuccess(
  stockState: StockState
): AssetTrackActionTypes {
  return {
    type: UPDATE_STOCK_STATE_SUCCESS,
    stockState: stockState,
  };
}

export function updateStockStateError(error: string): AssetTrackActionTypes {
  return {
    type: UPDATE_STOCK_STATE_ERROR,
    error: error,
  };
}
