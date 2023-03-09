import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";

export class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        
        <div className="menu-icons" onClick={ this.handleClick }>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className="nav-menu">
          {MenuItems.map((item, i) => {
            return (
              <li key={i}>
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            )
          })}
          <button>Sign Up</button>
        </ul>

      </nav>
    )
  }
}

export default Navbar;