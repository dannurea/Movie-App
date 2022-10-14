import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
export default function Navbar() {
  return ( 
    <>
          <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <Link
                    className='navbar-brand'
                    to="/"
                >
                    MovieApp
                </Link>
                  <a class="navbar-brand" href="#">Navbar</a>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav">
                          <Link class="nav-link active" aria-current="page" to="#">Home</Link>
                          <Link class="nav-link" to="#">Features</Link>
                          <Link class="nav-link" to="#">Pricing</Link>
                          <Link class="nav-link disabled">Disabled</Link>
                      </div>
                  </div>
                  <ul>
                    <  
                  </ul>
              </div>
          </nav>
    </>
  )
}
