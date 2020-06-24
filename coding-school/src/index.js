import React from 'react'
import ReactDom from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Navbar, { NavButton } from './Navigation/navbar';

class App {
  root = document.getElementById("root")

  show(component) {
    ReactDom.render(component, this.root)
  }
}

export const app = new App();

const page1=<p>hello</p>
const page2=<p>goodbye</p>

app.show(
  <Navbar>
    <NavButton body={page1}> HEllo </NavButton>
    <NavButton body={page2}> goodbye </NavButton>
  </Navbar>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
