import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { store } from './reducers'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
