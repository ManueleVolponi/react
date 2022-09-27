import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Layout extends Component {


  render() {

    return (
      <div>
            <nav className='container navbar-expanded'>
                <ul className='d-flex justify-content-start align-items-center navbar_menu'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
      </div>
    )
  }
}

export default Layout;