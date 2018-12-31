import React, { Component } from "react";

class App extends Component {
  container = React.createRef();
  state = {
    open: false
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open
      };
    });
  };
  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render() {
    return (
      <div className="bs-component" ref={this.container}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link show" data-toggle="tab" href="#profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              onClick={this.handleButtonClick}
              href="#"
            >
              Dropdown
            </a>
            <div
              className={
                this.state.open ? "dropdown-menu show" : "dropdown-menu"
              }
              x-placement="bottom-start"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
