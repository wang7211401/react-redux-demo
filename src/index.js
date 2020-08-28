import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { createStore, applyMiddleware } from "redux"
// import reducer from "./reducers/counter"
import { Provider } from "react-redux"
import rootReducer from "./reducers/index"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(logger, thunk))
)

// const render = () => {
//   ReactDOM.render(
//     <App
//       onIncrement={() => store.dispatch({ type: "INCREMENT" })}
//       onDecrement={() => store.dispatch({ type: "DECREMENT" })}
//       value={store.getState()}
//     />,
//     document.getElementById("root")
//   )
// }

// render()

// store.subscribe(render)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
