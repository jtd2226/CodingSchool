import React from 'react'
import ReactDom from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Navbar, {NavButton} from './Navigation/navbar';

class App {
  root = document.getElementById("root")

  show(component) {
    ReactDom.render(component, this.root)
  }
}

export const app = new App();

app.show(
  <Navbar>
    <NavButton> Test </NavButton>
    <NavButton> Test 2 </NavButton>
    <NavButton> Test 3</NavButton>
    <NavButton> Test 4</NavButton>
  </Navbar>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
