import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from "react-redux";
import { store } from "./store/Store";
import { AuthProvider } from "./context/AuthContext"; // If you implement auth context

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* If using AuthContext, wrap App with it */}
      {/* <AuthProvider> */}
        <App/>
      {/* </AuthProvider> */}
    </Provider>
  </StrictMode>,
)
