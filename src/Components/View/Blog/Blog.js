import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="">
      <h1 className="text-white py-5 text-center strategy-service-style about-header-style">
        Blog List
      </h1>

      {/* Breadcrumb Part */}
      <div className="text-center pb-5 mb-5">
        <Link to="/" className="text-decoration-none">
          <span className="text-white h6 px-1">Home</span>
        </Link>
        <span className="text-white h6 px-1">/</span>
        <span className="text-danger h6 px-1">Blog List</span>
      </div>

      {/* Blog Cards */}
      <div className="bg-white py-5">
        <div className="mx-auto row pb-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gy-lg-5 gy-md-3 gy-sm-2 gy-2 container">
          <div className="col bg-blog-style1 d-flex align-items-end">
          <div className="text-white p-3">
          <p>Development</p>
              <h4>Getting tickets to the big show</h4>
              <br/>
             <Link to='/blogDetails' className="blog-details-style">
             <Button variant="contained" color="error" className="mb-2">Explore</Button>
             </Link>
          </div>
          </div>
          <div className="col bg-blog-style2 d-flex align-items-end">
          <div className="text-white p-3">
          <p>Management</p>
              <h4>A big ticket gone to be an interesting</h4>
              <br/>
              <Link to='/blogDetails'  className="blog-details-style">
             <Button variant="contained" color="error" className="mb-2">Explore</Button>
             </Link>
          </div>
          </div>
          <div className="col bg-blog-style3 d-flex align-items-end">
          <div className="text-white p-3">
          <p>Design</p>
              <h4>The home of the future could bebes</h4>
              <br/>
              <Link to='/blogDetails'  className="blog-details-style">
             <Button variant="contained" color="error" className="mb-2">Explore</Button>
             </Link>
          </div>
          </div>
          <div className="col bg-blog-style4 d-flex align-items-end">
          <div className="text-white p-3">
          <p>Development</p>
              <h4>Getting tickets to the big sgit how</h4>
              <br/>
              <Link to='/blogDetails'  className="blog-details-style">
             <Button variant="contained" color="error" className="mb-2">Explore</Button>
             </Link>
          </div>
          </div>
          <div className="col bg-blog-style5 d-flex align-items-end">
          <div className="text-white p-3">
          <p>Management</p>
              <h4>A big ticket gone to be an interesting</h4>
              <br/>
              <Link to='/blogDetails'  className="blog-details-style">
             <Button variant="contained" color="error" className="mb-2">Explore</Button>
             </Link>
          </div>
          </div>
          <div className="col bg-blog-style6 d-flex align-items-end">
          <div className="text-white p-3">
          <p>Design</p>
              <h4>The home of the future could bebes</h4>
              <br/>
              <Link to='/blogDetails'  className="blog-details-style">
             <Button variant="contained" color="error" className="mb-2">Explore</Button>
             </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
