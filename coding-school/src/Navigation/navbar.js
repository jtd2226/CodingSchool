import React from "react";
import styles from "./navbar.module.css";

const NavbarContext = React.createContext({
    selectedIndex: 0,
    select: (index) => {},
});

class Navbar extends React.Component {
    state = { selectedIndex: 0 };

    cloneChild = (child, index) => {
        if (child.type === NavButton) {
            return React.cloneElement(child, {
                selected: this.state.selectedIndex === index,
                onClick: () => this.select(index),
            });
        } else {
            return child;
        }
    };

    select = (index) => {
        this.setState({
            selectedIndex: index,
        });
    };

    render() {
        const children = React.Children.map(
            this.props.children,
            this.cloneChild
        );
        return (
            <NavbarContext.Provider
                value={{
                    selectedIndex: this.state.selectedIndex,
                    select: this.select,
                }}
            >
                <div className={styles.Navbar}>{this.props.children}</div>
                {/* {children[this.state.selectedIndex].props.linkTo} */}
            </NavbarContext.Provider>
        );
    }
}

class NavButton extends React.Component {
    render() {
        return (
            <NavbarContext.Consumer>
                {({ selectedIndex, select }) => (
                    <span
                        className={`${styles.NavButton} ${
                            selectedIndex == this.index ? styles.selected : ""
                        }`}
                        onClick={this.props.onClick}
                    >
                        {this.props.children}
                    </span>
                )}
            </NavbarContext.Consumer>
        );
    }
}

export { NavButton };
export default Navbar;
