import React from "react";
import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(<App/>);