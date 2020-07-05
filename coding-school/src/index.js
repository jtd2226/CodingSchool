import React from 'react'
import ReactDom from 'react-dom';
import './App.css';
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