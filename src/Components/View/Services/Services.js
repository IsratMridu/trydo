import React from "react";
import { Link } from "react-router-dom";
import business from "../../../Assets/Images/business.png";

const Services = () => {
  return (
    <div className="py-5">
      <h1 className="pt-3 pb-3 text-center services-title fw-bold">Service</h1>

      {/* Breadcrumb Part */}
      <div className="text-center pb-5">
        <Link to="/" className="text-decoration-none">
          <span className="text-white h6 px-1">Home</span>
        </Link>
        <span className="text-white h6 px-1">/</span>
        <span className="text-danger h6 px-1">Service</span>
      </div>

      {/* Digital marketing Service */}
      <div className="marketing-service-style py-5 pb-5">
        <div className="container pb-5">
          <h1 className="text-center pt-5 pb-3">Digital Marketing</h1>
          <p className="text-secondary text-center h5">
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br />
            but the majority have suffered alteration.
          </p>
        </div>

        <div className="row container mx-auto pb-5">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style ">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Business Strategy</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Website Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3"> Marketing and Reporting</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Mobile App Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Website Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Marketing and Reporting</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
        </div>
      </div>

      {/* Strategy Service */}

      <div className="bg-white">
        <div className="container pt-5">
          <h1 className="pt-5 pb-3 text-center strategy-service-style">
            Strategy
          </h1>
          <p className="text-center h5 pb-5 text-secondary">
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered alteration.
          </p>
        </div>

        <div className="row container mx-auto pb-5">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center ">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Business Strategy</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Website Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3"> Marketing and Reporting</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Mobile App Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Website Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Marketing and Reporting</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
        </div>
      </div>

      {/* Crative agency service */}

      <div className="marketing-service-style py-5 pb-5">
        <div className="container pb-5">
          <h1 className="text-center pt-5 pb-3">Creative Agency</h1>
          <p className="text-secondary text-center h5">
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration.
          </p>
        </div>

        <div className="row container mx-auto pb-5">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style ">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Business Strategy</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Website Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3"> Marketing and Reporting</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Mobile App Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Website Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-style">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Marketing and Reporting</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
        </div>
      </div>

        {/* Development Service  */}
        <div className="bg-white pb-5">
        <div className="container pt-5">
          <h1 className="pt-5 pb-3 text-center strategy-service-style">
            Development
          </h1>
          <p className="text-center h5 pb-5 text-secondary">
            There are many variations of passages of Lorem Ipsum available,
            <br/> but the majority have suffered alteration.
          </p>
        </div>

        <div className="row container mx-auto pb-5">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center ">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Business Strategy</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Website Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3"> Marketing and Reporting</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Mobile App Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Website Development</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 p-lg-3 p-md-2 p-sm-1 p-1 hover-styles text-center">
            <img src={business} className="img-style mb-3" alt="images" />
            <h5 className="mb-3">Marketing and Reporting</h5>
            <p className="text-secondary">
              I throw myself amongh the tall grass by the stream as I lie close
              to the earth
            </p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Services;
