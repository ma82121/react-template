import React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/images/logo.svg';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/sub">sub</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </nav>
        </header>
        {this.props.children}
      </div>
     );
   }
 }