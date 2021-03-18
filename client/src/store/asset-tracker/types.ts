export interface StockState {
  ticker: string;
  price: number;
  rawData: any;
}

export interface AssetTrackerState {
  loading: boolean;
  error?: string;

  stocks: {
    byTicker: {
      [ticker: string]: StockState;
    };
  };
}

export const UPDATE_STOCK_STATE = 'UPDATE_STOCK_STATE';
export const UPDATE_STOCK_STATE_INIT = 'UPDATE_STOCK_STATE_INIT';
export const UPDATE_STOCK_STATE_SUCCESS = 'UPDATE_STOCK_STATE_SUCCESS';
export const UPDATE_STOCK_STATE_ERROR = 'UPDATE_STOCK_STATE_ERROR';

interface UpdateStockStateAction {
  type: typeof UPDATE_STOCK_STATE;
  ticker: string;
}

interface UpdateStockStateInitAction {
  type: typeof UPDATE_STOCK_STATE_INIT;
}

interface UpdateStockStateSuccessAction {
  type: typeof UPDATE_STOCK_STATE_SUCCESS;
  stockState: StockState;
}

interface UpdateStockStateErrorAction {
  type: typeof UPDATE_STOCK_STATE_ERROR;
  error: string;
}

export type AssetTrackActionTypes =
  | UpdateStockStateAction
  | UpdateStockStateInitAction
  | UpdateStockStateSuccessAction
  | UpdateStockStateErrorAction;
