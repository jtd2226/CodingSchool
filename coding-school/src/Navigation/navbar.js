import React from 'react';
import * as Util from '../util';

class Navbar extends React.Component {
    state = {selectedIndex: -1}

    cloneChild = (child, index) => {
        if(React.isValidElement(child)) {
            return React.cloneElement(child, {
                selected: this.state.selectedIndex === index,
                onClick: () => this.select(index)
            })
        } else {
            return child
        }
    }

    render() {
        this.children = React.Children.map(this.props.children, this.cloneChild)
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
            body: button.props.linkTo
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
        let className = 'navbutton'
        if(this.props.selected) {
            className += ' selected'
        }
        return (
            <span className={className} onClick={this.props.onClick}>
                {this.props.children}
            </span>
        )
    }
}

export {NavButton};
export default Navbar;