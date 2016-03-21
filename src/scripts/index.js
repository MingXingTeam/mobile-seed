import React from 'react'
import { render } from 'react-dom'
import createStore from './store/create-store'
import { Provider } from 'react-redux'
import Index from './components/Index'
import  '../styles/all.scss'

const store = createStore()
render(
      <Provider store={ store }>
        <Index />
      </Provider>,
  document.getElementById('app-wrapper')
)

