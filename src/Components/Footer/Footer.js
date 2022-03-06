import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'
import bit from '../../Assets/Images/bit.png'

const element = <FontAwesomeIcon icon={faSignIn} />
const element1 = <FontAwesomeIcon icon={faHandHoldingDollar} />
const element2 = <FontAwesomeIcon icon={faCoins} />
const element3 = <FontAwesomeIcon icon={faStarAndCrescent} />

const Footer = () => {
    return (
        <div className='py-5 '>
            <div className='row pb-2 '>
                <div className='col-lg-6 col-md-12 col-sm-12 text-center position-style
                 container'>
                    <div className='left-footer-style rounded-3 '>
                       
                       
                        <img src={bit} alt='bg-img' className='w-100'/>
                 
                    </div>
                    <div className='left-footer-relative'>
                        <p>READY TO DO THIS</p>
                        <h1>Let's get <br/> to work </h1>
                        <Link to='contact'>
                        <button className='btn btn-danger mt-3 px-5 py-3  fw-bold'>CONTACT US</button>
                        </Link>
                    </div>

                    


                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 pt-5 mt-5'>
                    <div className='container'>
                        <div className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 '>
                            <div className='col'>
                                <h3 className='text-secondary pb-4'>Quick Links</h3>
                                
                                <Link to='/work' className='linkStyle'>
                                <p className='text-secondary h5 pb-2 footer-link-style' >Work</p>
                                </Link>
                                <Link to='sayHelloAbout' className='linkStyle'>
                                <p  className='text-secondary h5 pb-2 footer-link-style '>About</p>
                                </Link>
                                <Link to='/talk' className='linkStyle'>
                                <p  className='text-secondary h5 footer-link-style '>Let's Talk</p>
                                </Link>

                            </div>
                            <div className='col'>
                               
                            <h3 className='text-secondary pb-4'>Say Hello</h3>
                            
                            <Link to='/admin' className='linkStyle'>
                            <p className='text-secondary h5 pb-2 footer-link-style'>admin@example.com</p>
                            </Link>
                            <Link to='/hr' className='linkStyle'>
                            <p className='text-secondary h5 pb-2 footer-link-style'>hr@example.com</p>
                            </Link>
                            
                            <p className='text-secondary h5 container g-0'>
                                <div className='row row-cols-lg-4 row-cols-md-4 row-cols-sm-4 container g-0'>
                                    <div className='col symbol-style'>
                                        {element2}


                                    </div>
                                    <div className='col symbol-style'>
                                        {element}

                                    </div>
                                    <div className='col symbol-style'>
                                        {element1}

                                    </div>
                                    <div className='col symbol-style'>
                                        {element3}

                                    </div>

                                </div>
                            </p>
                            

                            </div>

                        </div>
                        <div>
                            <p className='text-secondary h5 text-center pt-5'>Copyright &copy; 2021 Rainbow-Themes. All Rights Reserved. </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;