import React from 'react'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid navbars" >
    <Link className="navbar-brand" to="/App">Home</Link>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <h5>Craete An Account</h5>
    </div>
  </nav>
  </div>
  )
}

export default Header