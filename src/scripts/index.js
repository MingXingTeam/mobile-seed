import React from 'react'
import { render } from 'react-dom'
import createStore from './store/create-store'
import { Provider } from 'react-redux'
import Index from './components/Index'

//createStore方法可以传入初始数据
const store = createStore()
console.log('[store]:'+JSON.stringify(store));
render(
      <Provider store={ store }>
        <Index />
      </Provider>,
  document.getElementById('app-wrapper')
)

