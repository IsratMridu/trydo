import React from 'react';
import business from '../../../Assets/Images/business.png'
import website from '../../../Assets/Images/website.png'
import marketing from '../../../Assets/Images/marketing.png'
import about from '../../../Assets/Images/about.jpg'
import { Link } from 'react-router-dom';
import partner1 from '../../../Assets/Images/partner-1.png'
import partner2 from '../../../Assets/Images/partner-2.png'
import partner3 from '../../../Assets/Images/partner-3.png'
import partner4 from '../../../Assets/Images/partner-4.png'
import partner5 from '../../../Assets/Images/partner-5.png'
import partner6 from '../../../Assets/Images/partner-6.png'
import partner7 from '../../../Assets/Images/partner-7.png'
import partner8 from '../../../Assets/Images/partner-8.png'
import partner9 from '../../../Assets/Images/partner-9.png'

const Home = () => {
    return (
        <div className=''>
           <h1 className='home-banner-header pt-5  text-white container'>A DIGITAL <br/> AGENCY</h1>

           {/* Strategy, Development, Marketing */}
           <div className='container pt-5'>
               <div className='row d-flex pb-5'>
                   <div className='col-lg-4 col-md-6 col-sm-12'>
                       <img src={business} alt='business_logo' className='py-3'/>
                       <h3 className='text-white py-2'>Business Strategy</h3>
                       <p className='text-secondary h5 py-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>

                       

                   </div>
                   <div className='col-lg-4 col-md-6 col-sm-12'>
                   <img src={website} alt='website_logo' className='py-3'/>
                   <h3 className='text-white py-2'>Website Development</h3>
                   <p className='text-secondary h5 py-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>


                   </div>
                   <div className='col-lg-4 col-md-6 col-sm-12'>
                   <img src={marketing} alt='marketing_logo' className='py-3'/>
                   <h3 className='text-white py-2'>Marketing and Reporting</h3>
                   <p className='text-secondary h5 py-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>


                   </div>

               </div>
           </div>

           {/* About Section */}

           <div className='bg-second py-5'>
               <div className='container'>
             
               <div className='row  '>
                   <div className='col-lg-5 col-md-12 col-sm-12'>
                       <img src={about} className='img-fluid rounded-3' alt='about_section_image'/>


                   </div>
                   <div className='col-lg-7 col-md-12 col-sm-12'>
                       <div className='row py-5 my-5'>
                           <div className='col-lg-12 col-md-12 col-sm-12'>
                               <h1 className='about-header-1 text-white'>About</h1>
                               <p className='text-secondary h5' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>

                           </div>
                           <div className='col-lg-12 col-md-12 col-sm-12'>
                               <div className='row py-5 row-cols-lg-2 row-cols-md-2 row-cols-sm-2'>
                                   <div className='col'>
                                       <h1 className='text-white'>Who we are</h1>
                                       <p className='text-secondary h5'>There are many vtions of passages  of Lorem Ipsum available, but the  majority <br/> have suffered.</p>
                                   </div>
                                   <div className='col'>
                                       <h1 className='text-white'>Who we are</h1>
                                       <p className='text-secondary h5'>There are many vtions of passages  of Lorem Ipsum available, but the  majority <br/> have  suffered.</p>
                                   </div>

                               </div>

                           </div>


                       </div>

                   </div>

               </div>
               </div>

           </div>

           {/* Services Section */}
           <div className='container py-5'>
               <div className='row mx-auto'>
                   <div className='col-lg-4 col-md-6 col-sm-12 '>
                       <h1 className='services-header-1 text-white pb-3 pt-4'>Services</h1>
                       <p className='text-secondary h5 pb-4'>There are many variations of passages of  <br/> Lorem Ipsum available, but the majority <br/> have suffered alteration.</p>

                      <Link className='link-style' to='/browse'>
                      <button className='btn btn-outline-danger px-3 py-2 fw-bold '>Request Custom Service</button>
                      </Link>

                   </div>
                   <div className='col-lg-8 col-md-6 col-sm-12'>
                       <div className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 mx-auto py-3'>
                       <div className='col col-style p-3'>
                               <img src={business} alt='img' className='py-2'/>
                               <h3 className='text-white py-2'>Business Strategy</h3>
                               <p className='text-white h5 py-2'>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>


                           </div>
                           <div className='col col-style p-3'>
                               <img src={business} alt='img' className='py-2'/>
                               <h3 className='text-white py-2'>Website Development</h3>
                               <p className='text-white h5 py-2'>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>


                           </div>

                       </div>
                       <div className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 mx-auto py-3'>
                       <div className='col col-style p-3'>
                               <img src={business} alt='img' className='py-2'/>
                               <h3 className='text-white py-2'>Marketing & Reporting</h3>
                               <p className='text-white h5 py-2'>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>


                           </div>
                           <div className='col col-style p-3'>
                               <img src={business} alt='img' className='py-2'/>
                               <h3 className='text-white py-2'>Mobile App Development</h3>
                               <p className='text-white h5 py-2'>I throw myself down among the tall grass by the stream as I lie close to the earth.</p>


                           </div>

                       </div>

                   </div>

               </div>
           </div>

           {/* Fun Facts */}
           <div className='fun-fact-bg py-5'>
               <div className='container'>
                   <h1 className='text-center text-white'>Our Fun Facts</h1>

                   <div className='row pt-5 text-center'>
                       <div className='col-lg-4 col-md-6 col-sm-4 pb-4'>
                           <h1 className='text-danger pb-3'>199<span className='temp-position'>+</span></h1>
                           <p className='text-secondary h5'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>


                       </div>
                       <div className='col-lg-4 col-md-6 col-sm-4 pb-4'>
                       <h1 className='text-danger pb-3'>575<span className='temp-position'>+</span></h1>
                       <p className='text-secondary h5'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>

                       </div>
                       <div className='col-lg-4 col-md-6 col-sm-4 pb-4'>
                       <h1 className='text-danger pb-3'>69<span className='temp-position'>+</span></h1>
                       <p className='text-secondary h5'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>

                       </div>

                   </div>

               </div>

           </div>

           {/* Partners Section */}

           <div className='bg-white py-5'>
               <div className='container pb-5'>

               
               <div className='partners-list container py-4'>
                   <img src={partner1} alt='partner' className='img-fluid' />
                   <img src={partner2} alt='partner'  className='img-fluid' />
                   <img src={partner3} alt='partner'  className='img-fluid' />
                   <img src={partner4} alt='partner'  className='img-fluid' />
                   <img src={partner5} alt='partner'  className='img-fluid' />


               </div>
               <div className='container py-4'>
                   <div className='container'>
                   <div className='container second-partners-list'>
                       <img src={partner6} alt='partner'  className='img-fluid' />
                       <img src={partner7} alt='partner'  className='img-fluid' />
                       <img src={partner8} alt='partner'  className='img-fluid' />
                       <img src={partner9} alt='partner'  className='img-fluid' />

                   </div>

                   </div>
                  
               </div>
               </div>

           </div>


            
        </div>
    );
};

export default Home;