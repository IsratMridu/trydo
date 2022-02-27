import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <div className="py-5">
      <h1 className="pb-5 pt-3 services-title fw-bold text-center">Service</h1>

      {/* Breadcrumb Part */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
      
    </div>
  );
};

export default Services;
