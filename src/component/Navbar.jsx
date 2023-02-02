import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid ">
    <Link className="navbar-brand" to='/'>FINANCIAL MARKETING</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/Home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/About'>About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to='' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link className="dropdown-item" to='/Services'>Services</Link></li>
            <li><Link className="dropdown-item" to='photo'>Photo</Link></li>
            <li><Link className="dropdown-item" to='team'>Team Work</Link></li>
            <li><Link className="dropdown-item" to='cumponies'>Companies</Link></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar