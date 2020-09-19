import {combineReducers, createStore} from 'redux';
import transactionsReducer from './../reducers/transactions'
import filterReducer from './../reducers/filters'

export const store = createStore(combineReducers({
  transactions: transactionsReducer,
  filters: filterReducer
}))


