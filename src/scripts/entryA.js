import React from 'react'
import { render } from 'react-dom'
import createStore from './store/create-store'
import { Provider } from 'react-redux'
import Home from './components/home'

const store = createStore()

render(
      <Provider store={ store }>
        <Home />
      </Provider>,
  document.getElementById('app-wrapper')
)