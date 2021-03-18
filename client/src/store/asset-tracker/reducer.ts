import {
  AssetTrackActionTypes,
  AssetTrackerState,
  UPDATE_STOCK_STATE_ERROR,
  UPDATE_STOCK_STATE_INIT,
  UPDATE_STOCK_STATE_SUCCESS,
} from "./types";

const initialState: AssetTrackerState = {
  loading: false,
  error: undefined,

  stocks: {
    byTicker: {},
  },
};

export const assetTrackerReducer = (
  state = initialState,
  action: AssetTrackActionTypes
): AssetTrackerState => {
  switch (action.type) {
    case UPDATE_STOCK_STATE_INIT:
      return {
        ...state,
        loading: true,
        error: undefined,
      };

    case UPDATE_STOCK_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        stocks: {
          ...state.stocks,
          byTicker: {
            ...state.stocks.byTicker,
            [action.stockState.ticker]: action.stockState,
          },
        },
      };

    case UPDATE_STOCK_STATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
