import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

const APP_NODE = document.getElementById('root')

if (!APP_NODE) {
  throw new Error('APP_NODE* has not been found in the DOM')
}

const root = ReactDOM.createRoot(APP_NODE)

export const render = () =>
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

render()
