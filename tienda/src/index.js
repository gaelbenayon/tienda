import React from "react";
import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import getImages from "./getImages.js";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

getImages();

root.render(<App/>);