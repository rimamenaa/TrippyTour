import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";

export class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <ul className="nav-menu">
          {MenuItems.map((item, i) => {
            return (
              <li key={i}>
                <a href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            )
          })}

        </ul>

      </nav>
    )
  }
}

export default Navbar;