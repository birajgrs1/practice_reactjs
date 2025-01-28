import React from 'react'
import store from "./store/store.js"
import {Provider} from "react-redux"
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
