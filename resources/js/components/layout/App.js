import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Layout from '../layout-constructor/Header'
import Footer from '../layout-constructor/Footer'

class App extends Component {
  render() {
    return (
        <>
        <div className="app">
            <div>
            <Layout />
            <div className='pt-5 pb-5'>
              <Routes>
                  <Route path="/" element={<Home />} exec />
                  <Route path="/about"  element={<About />} />
              </Routes>
            </div>
            <Footer />
            </div>
        </div>
      </>
    )
  }
}

export default App;