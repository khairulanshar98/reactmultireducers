import * as React from 'react'
import * as ReactDOM from "react-dom";
import { Root } from './pages/root'
import { Provider } from './storage/provide'

ReactDOM.render(<Provider><Root compiler="TypeScript" framework="React" store="Hooks (useContext & multi useReducers)"/></Provider>,
    document.getElementById('start'))