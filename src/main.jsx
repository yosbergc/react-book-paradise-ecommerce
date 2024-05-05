import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext'
import { FilterContextProvider } from './context/FilterContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartProvider>
        <FilterContextProvider>
            <App />
        </FilterContextProvider>
    </CartProvider>
)
