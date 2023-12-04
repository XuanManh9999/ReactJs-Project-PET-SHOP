import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Global from "./components/Global/Global";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Global>
            <App />
        </Global>
    </React.StrictMode>
);

reportWebVitals();
