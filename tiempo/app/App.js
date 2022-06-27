// this file invokes the main functions of the App

"use strict";

import Router from "./components/Router.js";
import Background from "./helpers/Background.js";
import HamburgerBtn from "./helpers/HamburgerBtn.js";

export default function App() {
  HamburgerBtn();
  Router();
  Background();

  window.addEventListener("hashchange", (e) => {
    Router();
    Background();
  });
}
