import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Navbar, { NavButton } from "./Navigation/navbar";

class App {
    root = document.getElementById("root");

    show(component) {
        ReactDom.render(component, this.root);
    }
}

export const app = new App();

const page1 = <div>Page 1</div>;
const page2 = <div>Page 2</div>;
const page3 = <div>Page 3</div>;
const page4 = <div>Page 4</div>;

app.show(
    <Navbar>
        <NavButton linkTo={page1}> Page 1 </NavButton>
        <NavButton linkTo={page2}> Page 2 </NavButton>
        <NavButton linkTo={page3}> Page 3</NavButton>
        <NavButton linkTo={page4}> Page 4</NavButton>
    </Navbar>
);

const CLASS_TIME = true;

if (CLASS_TIME) {
    // This shows the classtime page located in the file classtime.js
    import("./Classtime/classtime").then();
}
