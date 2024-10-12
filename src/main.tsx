import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

import {store} from './redux/store.ts'
import App from './App.tsx'
import 'modern-normalize'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
