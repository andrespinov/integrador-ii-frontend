import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export { store, persistor }
