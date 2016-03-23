import React from 'react'
import { render } from 'react-dom'
import createStore from './store/create-store'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import  '../styles/all.scss'

import App from './components/app'
import Kline from './components/kline'

const store = createStore()

render(
      <Provider store={ store }>
         <Router history={hashHistory}>
		    <Route path="/" component={App}/>
		    <Route path="/kline/:code" component={Kline}/>
		 </Router>
      </Provider>,
  document.getElementById('app-wrapper')
)

