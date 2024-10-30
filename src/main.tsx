import React from "react"
import App from "./App"
import ReactDOM from "react-dom/client"
import "./reset.css"

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootEl = document.getElementById("root")!

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
