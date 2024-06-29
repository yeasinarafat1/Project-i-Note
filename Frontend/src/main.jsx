
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './contex/authContex.jsx'
import { SearchContextProvider } from './contex/SearchContex.jsx'


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryclient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryclient}>
    <AuthContextProvider>
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
    <ToastContainer/>
    </AuthContextProvider>
    </QueryClientProvider>
)
