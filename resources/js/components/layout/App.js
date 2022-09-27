import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Layout from '../component/Header'

class App extends Component {
  render() {
    return (
        <>
        <div className="app">
            <div className="container mt-4">
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} exec />
                <Route path="/about"  element={<About />} />
            </Routes>
            </div>
        </div>
      </>
    )
  }
}

export default App;