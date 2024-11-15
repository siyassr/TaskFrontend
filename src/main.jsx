import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Redux/Store.jsx'
import  {Provider} from "react-redux"
import {TaskProvider} from "./Context/TaskContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={Store}>
    <TaskProvider>

  <App />
    </TaskProvider>
  </Provider>
    
  </StrictMode>,
)
