import React from 'react'
import ReactDOM from 'react-dom/client'
import {HelloWorld} from './components/HelloWorld'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld nombre={"Javier"} id={"1"}/>
    </React.StrictMode>,
);
