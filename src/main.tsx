// import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
