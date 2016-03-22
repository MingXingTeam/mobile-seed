import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from './promise-middleware'
import {_index, _plate, _rank} from '../reducers/marketReducer'
import {_pageTab} from '../reducers/pageTabReducer'

export default function(data) {

    var reducer = combineReducers({
	    _index: _index,
	    _plate: _plate,
	    _rank: _rank,
	    _pageTab: _pageTab
	})
  //多个中间件：applyMiddleware(middleware1, middleware2, ...)(createStore)
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(reducer, data)

  return store
}