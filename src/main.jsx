import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from "./store/Store.js"
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>

    <ToastContainer 
      position='top-center'
      autoClose = {1000}
      hideProgressBar = {false}
      newestOnTop = {false}
      closeOnClick
      rtl = {false}
      pauseOnFocusLoss = {false}
      draggable
      pauseOnHover = {false}
      theme='light'
    />
  
  </BrowserRouter>
)
