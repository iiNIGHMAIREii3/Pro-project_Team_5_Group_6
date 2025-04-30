import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';



const CLIENT_ID = "999378446015-g9bdqlj1955euin3k1716hfa3lia5hdq.apps.googleusercontent.com"
createRoot(document.getElementById('root')).render(
  <StrictMode>

<GoogleOAuthProvider clientId={CLIENT_ID}>
<App />
</GoogleOAuthProvider>
    
  </StrictMode>,
)
