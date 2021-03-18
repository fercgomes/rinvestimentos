import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { assetTrackerReducer } from './asset-tracker/reducer';
import { watchAssetTracker } from './asset-tracker/sagas';

const rootReducer = combineReducers({
  assetTracker: assetTrackerReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof rootReducer>;
sagaMiddleware.run(watchAssetTracker);
