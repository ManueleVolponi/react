import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Layout extends Component {


  render() {

    return (
      <div className='navbar_container shadow pt-3 pb-3'>
            <nav className='container'>
                <ul className='d-flex justify-content-start align-items-center navbar_menu mb-0'>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/about">Chi Siamo</Link>
                    </li>
                </ul>
            </nav>
      </div>
    )
  }
}

export default Layout;