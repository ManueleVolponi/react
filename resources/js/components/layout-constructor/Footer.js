import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <footer className="footer bg_footer">
                    <div className="container">
                        <div className="row footer_container">
                            <div className="col-xl-4 col-12">
                                <div className="footer-about mt-30">
                                
                                    <h5 className="title">Su di Noi</h5>
                                
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores odio neque debitis.</p>
                                    <ul className="social">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-6 footer_content">
                                <div className="footer-list mt-40">
                                    <h5 className="title">Esplora</h5>
                                    <ul>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>

                                        <li>
                                            <Link to="/about">Chi Siamo</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-6 footer_content">
                                <div className="footer-list mt-40 pl-55">
                                    <h5 className="title">Aiuto</h5>
                                    <ul>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-12 text-center mt-2">
                                <span className="copyright"> © 2022 MV</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}
 
export default Footer;