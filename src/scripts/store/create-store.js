import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from './promise-middleware'
import * as reducers from '../reducers/marketSectionReducer'
// import * as reducers from '../reducers/reducers'

export default function(data) {
  var reducer = combineReducers(reducers)
  //多个中间件：applyMiddleware(middleware1, middleware2, ...)(createStore)
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(reducer, data)

  return store
}