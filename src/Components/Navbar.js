import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
          }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            WittyNewsWire
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${location.pathname === '/business' ? 'active' : ''}`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${location.pathname === '/entertainment' ? 'active' : ''}`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${location.pathname === '/general' ? 'active' : ''}`}
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${location.pathname === '/health' ? 'active' : ''}`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${location.pathname === '/science' ? 'active' : ''}`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${location.pathname === '/sports' ? 'active' : ''}`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`nav-link ${location.pathname === '/technology' ? 'active' : ''}`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className={`form-control me-2 ${props.mode === 'dark' ? 'text-white bg-black' : 'text-black bg-white'
                  }`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className={`btn ${props.mode === 'dark' ? 'btn-outline-light' : 'bg-dark text-white'
                  }`}
                type="submit"
              >
                Search
              </button>
            </form>

            <div className="form-check form-switch mx-3">
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                defaultChecked={props.mode === 'dark'}
              />
              <label
                className={`form-check-label ${props.mode === 'dark' ? 'text-white' : 'text-black'
                  }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
