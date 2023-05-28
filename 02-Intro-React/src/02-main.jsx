import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const ulLi =
    React.createElement('div', null,
        React.createElement('ul', null,
            React.createElement('li', null, 'Item1')));

const h2 = document.createElement('h2');
h2.innerText = 'Hello World';

const ulLi2 = <div><ul><li>Item 1</li></ul></div>;

// https://babeljs.io/
const ul = /*#__PURE__*/ React.createElement(
    "section",
    null,
    /*#__PURE__*/ React.createElement(
        "div",
        null,
        /*#__PURE__*/ React.createElement(
            "ul",
            null,
            /*#__PURE__*/ React.createElement("li", null, "1"),
            /*#__PURE__*/ React.createElement("li", null, "2"),
            /*#__PURE__*/ React.createElement("li", null, "3"),
            /*#__PURE__*/ React.createElement("li", null, "4"),
            /*#__PURE__*/ React.createElement("li", null, "5"),
            /*#__PURE__*/ React.createElement("li", null, "6")
        )
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    ul
);
