import React, { useState } from "react";
import { Link } from "react-router-dom";
import model2 from "../../../Assets/Images/model2.jpg";
import aboutbg from "../../../Assets/Images/aboutbg.png";
import skill1 from "../../../Assets/Images/skill1.jpg";
import skill2 from "../../../Assets/Images/skill2.jpg";
import skill3 from "../../../Assets/Images/skill3.jpg";
import desc1 from "../../../Assets/Images/desc1.jpg";
import desc2 from "../../../Assets/Images/desc2.jpg";
import desc3 from "../../../Assets/Images/desc3.jpg";
import desc4 from "../../../Assets/Images/desc4.jpg";
import desc5 from "../../../Assets/Images/desc5.jpg";
import desc6 from "../../../Assets/Images/test-6.jpg";
import desc7 from "../../../Assets/Images/desc7.jpg";
import desc8 from "../../../Assets/Images/resc-8.jpg";

const About = () => {
  const [intro, setIntro] = useState(
    "AKLIMA - COO, AMERIMAR ENTERPRISES, INC."
  );
  const [description, setDescription] = useState(
    "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original."
  );
  // const [active, setActive]= useState(false);

  const handleAklima = () => {
    setIntro("AKLIMA - COO, AMERIMAR ENTERPRISES, INC.");
    setDescription(
      "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original."
    );
  };

  const handleFatima = () => {
    setIntro("FATIMA ASRAFY - COO, AMERIMAR ENTERPRISES, INC.");
    setDescription("Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.");
  }

  const handleJannat = () =>{
    setIntro("JANNAT TUMPA - COO, AMERIMAR ENTERPRISES, INC.");
    setDescription("Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.");
  }

  const handleDue = () => {
    setIntro("JOHNS DUE - COO, AMERIMAR ENTERPRISES, INC.");
    setDescription("Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.");
  }


  const handleDoe = () => {
    setIntro("JOHN DOE - COO, AMERIMAR ENTERPRISES, INC.");
    setDescription("John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.");
  }

  const handleOrthi = () => {
    setIntro("AMAR ORTHI - COO, AMERIMAR ENTERPRISES, INC.");
    setDescription("Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.");
  }

  const handleFatimaMa = () => {
    setIntro("");
    setDescription("");
  }

  return (
    <div className="">
      <h1 className="text-white py-5 text-center strategy-service-style about-header-style">
        About
      </h1>

      {/* Breadcrumb Part */}
      <div className="text-center pb-5 mb-5">
        <Link to="/" className="text-decoration-none">
          <span className="text-white h6 px-1">Home</span>
        </Link>
        <span className="text-white h6 px-1">/</span>
        <span className="text-danger h6 px-1">About</span>
      </div>

      {/* about description */}

      <div className="bg-white pt-5">
        <div className="container row mx-auto py-5 ">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <img
              src={model2}
              className="img-fluid nx-auto pb-5 rounded"
              alt="model_2_image"
            />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12">
            <div className="pt-lg-5 pt-md-0 pt-sm-0 pt-0  ">
              <h1 className="fw-bold pb-2">About</h1>
              <p className="text-secondary about-page-p">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which dont
                look even slightly believable. If you are going.
              </p>
            </div>

            <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-2 pt-4">
              <div className="col">
                <h3 className="pb-3">Who we are</h3>
                <p className="about-page-p text-secondary">
                  There are many vtions of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>

              <div className="col">
                <h3 className="pb-3">Who we are</h3>
                <p className="about-page-p text-secondary">
                  There are many vtions of passages of Lorem Ipsum available,
                  but the majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fun facts */}

      <div className=" bg-white">
        <h1 className="text-center pb-4">Our Fun Facts</h1>
        <div className="row  text-center pb-5 container mx-auto">
          <div className="col-lg-4 col-md-6 col-sm-4 pb-4">
            <h1 className="text-danger fw-bold pb-3">
              199<span className="temp-position">+</span>
            </h1>
            <p className="text-secondary h5">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-4 pb-4">
            <h1 className="text-danger pb-3 fw-bold">
              575<span className="temp-position">+</span>
            </h1>
            <p className="text-secondary h5">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-4 pb-4">
            <h1 className="text-danger pb-3 fw-bold">
              69<span className="temp-position">+</span>
            </h1>
            <p className="text-secondary h5">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
        </div>
      </div>

      {/* fun fact background next images */}

      <div className="fun-fact-next-background bg-white  pb-5 ">
        <img src={aboutbg} className="img-fluid" alt="fun_image" />

        <div className="py-5">
          <h1 className="skilled-team-h1 pb-3">Skilled Team</h1>
          <p className="text-center text-secondary skilled-team-p">
            There are many variations of passages of Lorem Ipsum available, but
            the <br /> majority have suffered alteration.
          </p>
        </div>

        <div className="row container mx-auto gy-5 pb-5">
          <div className="col col-lg-4 col-md-6 col-sm-12 col-12 skilled-employee">
            <img
              src={skill1}
              alt="skill19mg"
              className="img-fluid  rounded-3"
            />
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-12 col-12 skilled-employee">
            <img
              src={skill2}
              alt="skill19mg"
              className="img-fluid  rounded-3"
            />
          </div>
          <div className="col col-lg-4 col-md-6 col-sm-12 col-12 skilled-employee">
            <img
              src={skill3}
              alt="skill19mg"
              className="img-fluid  rounded-3"
            />
          </div>
        </div>
      </div>

      {/* Testimony of staffs and employees */}

      <div className="bg-secondd py-5">
        <div className="container text-center mx-auto">
          <h1 className="pb-5 pt-4">{description}</h1>
          <h6  className="text-secondary">{intro}</h6>

        </div>

      </div>


      {/* Images of staff and employees */}

      <div className="pb-5 pt-5 bg-secondd">
        <div className="w-50 mx-auto">
          <div className="row gy-5 pb-5">
            <div
              onClick={handleAklima}
              className="col-lg-3 col-md-4 col-sm-6 col-6 text-center desc-img-hover"
            >
              <img
                src={desc1}
                className="img-fluid rounded-3"
                alt="desc_image"
              />
            </div>
            <div onClick={handleFatima} className="col-lg-3 col-md-4 col-sm-6 col-6 text-center desc-img-hover">
              <img
                src={desc2}
                className="img-fluid rounded-3"
                alt="desc_image"
              />
            </div>
            <div onClick={handleJannat} className="col-lg-3 col-md-4 col-sm-6 col-6 text-center desc-img-hover">
              <img
                src={desc3}
                className="img-fluid rounded-3"
                alt="desc_image"
              />
            </div>
            <div onClick={handleDue} className="col-lg-3 col-md-4 col-sm-6 col-6 text-center desc-img-hover">
              <img
                src={desc4}
                className="img-fluid rounded-3"
                alt="desc_image"
              />
            </div>
            <div onClick={handleDoe} className="col-lg-3 col-md-4 col-sm-6 col-6 text-center desc-img-hover">
              <img
                src={desc5}
                className="img-fluid rounded-3"
                alt="desc_image"
              />
            </div>
            <div onClick={handleOrthi} className="col-lg-3 col-md-4 col-sm-6 col-6 text-center desc-img-hover">
              <img
                src={desc6}
                className="img-fluid rounded-3"
                alt="desc_image"
              />
            </div>
            <div onClick={handleFatimaMa} className="col-lg-3 col-md-4 col-sm-6 col-6 text-center desc-img-hover">
              <img
                src={desc7}
                className="img-fluid rounded-3"
                alt="desc_image"
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center desc-img-hover">
              <img
                src={desc8}
                className="img-fluid rounded-3"
                alt="desc_image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
