/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
// eslint-disable-next-line no-unused-vars
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
