import React from 'react';
const Navbar =() => {
  return (
      <div className="ul-container">
          <nav className="uk-navbar">
            <div className="ul-navbar-left">
                <a href="#" className="ul-navbar-item uk-logo">My todos</a>
            </div>
            <div className="uk-navbar-right">
                <ul className="ul-navbar-nav">
                    <li>
                        <a href="#">
                            <span ul-icon="icon: plus;ratio:1.2"></span>
                        </a>
                    </li>
                </ul>
            </div>
          </nav>
    </div>
  );
}

export default Navbar;