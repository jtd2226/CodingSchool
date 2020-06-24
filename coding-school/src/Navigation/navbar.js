import React from 'react';
import * as Util from '../util';

class Navbar extends React.Component {
    state = {selectedIndex: -1}

    render() {
        this.children = React.Children.map(this.props.children, (child, index) => {
            if(!React.isValidElement(child)) return child
            return React.cloneElement(child, {
                selected: this.state.selectedIndex === index,
                onClick: () => this.select(index)
            })
        })
        return (
            <>
            <div className="navbar">{this.children}</div>
            {this.state.body}
            </>
        );
    }

    componentDidMount() {
        this.select(0)
        window.addEventListener("keydown", this.onkeydown)
    }
    
    selectKey = key => typeof key === "number" && this.select(key - 1)

    select = (index) => {
        const wrappedIndex = index < 0 ? index + this.children.length : index % this.children.length
        if(this.state.selectedIndex === wrappedIndex) return 
        const button = this.children[wrappedIndex]
        if(!button) return;

        this.setState({
            selectedIndex: wrappedIndex,
            body: button.props.body
        })
    }

    onkeydown = (event) => {
        const key = Util.keyCodeMap[event.keyCode]
        switch (key) {
            case "←":
                this.select(this.state.selectedIndex - 1)
                break;
            case "→":
                this.select(this.state.selectedIndex + 1)
                break;
            case "tab":
                event.preventDefault()
                this.select(this.state.selectedIndex + 1)
                break;
            default: this.selectKey(key)
        }
    }
}

class NavButton extends React.Component {
    render() {
        return (
            <span className={`navbutton ${this.props.selected ? 'selected' : ''}`} onClick={this.props.onClick}>
                {this.props.children}
            </span>
        )
    }
}

export {NavButton};
export default Navbar;