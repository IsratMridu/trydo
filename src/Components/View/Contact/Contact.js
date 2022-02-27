import { Button, TextField } from "@mui/material";
import React from "react";
import model from "../../../Assets/Images/model.jpg";
import * as Icon from 'react-feather';


const Contact = () => {
  return (
    <div className=" bg-white">

        {/* Contact Option Grid */}
        <div className="bg-sec">
            <div className="container">
            <div className="row gx-lg-5 gx-md-2 gx-sm-0 gx-0 py-5">
            
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 pb-4  rounded-3 ">
                <div className="bg-white p-lg-5 p-md-2 p-sm-1 p-1 rounded-3">
                   
                    <Icon.Headphones className="text-danger h1"/>
                    <h6 className="fw-bold pb-3 ">Contact With Phone Number</h6>
                    <span className=" contact-number-style">+057 254 365 456</span>
                    <br/>
                    <span className=" contact-number-style">+856 325 652 984</span>

                </div>

            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 pb-4 col-12">
            <div className="bg-white p-lg-5 p-md-2 p-sm-1 p-1  rounded-3">
                  <Icon.Mail className="text-danger h1"/>   
                    <h6 className="fw-bold pb-3">Email Address</h6>
                    <span className=" contact-number-style">admin@gmail.com</span>
                    <br/>
                    <span className=" contact-number-style">example@gmail.com</span>

                </div>

            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 pb-4 col-12">
            <div className="bg-white p-lg-5 p-md-2 p-sm-1 p-1  rounded-3">
            <Icon.MapPin className="text-danger h1"/>  
                    <h6 className="fw-bold pb-3">Location</h6>
                    <span className=" contact-number-style">5678 Bangla Main Road, cities 580</span>
                    <br/>
                    <span className=" contact-number-style">GBnagla, example 54786</span>

                </div>

            </div>

        </div>
            </div>
        
        </div>
        
        
        {/* Contact Form and Model image */}

      <div className="row container mt-5 mx-auto py-5 ">
        <div className="col-lg-6 col-md-12 col-sm-12 pb-5">
            <h1 className="fw-bold pb-2">Contact Us.</h1>
            <p className="h5 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>
          <TextField
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            className="p-1 w-100 mb-3"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            className="p-1 w-100 mb-3"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            className="p-1 w-100 mb-3"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            className="p-1 w-100 mb-3"
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Your Message"
            variant="outlined"
            className="p-1 w-100 mb-3"
          />
          <br />
          <Button variant="contained" color="error" className="px-5 py-3 fw-bold">
            SUBMIT NOW
          </Button>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 pb-5">
          <img src={model} alt="model_img" className="img-fluid" />
        </div>
      </div>
     

      


    </div>
  );
};

export default Contact;
