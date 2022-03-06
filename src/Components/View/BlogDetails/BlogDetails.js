import { Button, TextField } from "@mui/material";
import React from "react";
import * as Icon from "react-feather";
import bgImage from "../../../Assets/Images/blogs1.jpg";
import blogsingle from "../../../Assets/Images/blogsingle.png";

const BlogDetails = () => {
  return (
    <div className="pb-5 bg-white">
      <div className=" pb-5 bg-white">
        <div className="bg0-dark py-5">
          <div className="individual-blog-background ">
            <h1 className=" single-vlog-header fw-bold text-center">
              The Home of The Future Could Bebes
            </h1>
          </div>
          <div className="text-white">
            <div className="author-information mx-auto">
              <div className="row mx-auto pt-5 pb-3">
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex align-tems-center justify-content-center">
                  <Icon.Clock className="px-1" />
                  <span className="px-1">May 18, 2020</span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex align-tems-center justify-content-center">
                  <Icon.User className="px-1" />
                  <span className="px-1">NipaBali</span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex align-tems-center justify-content-center">
                  <Icon.MessageCircle className="px-1" />
                  <span className="px-1">15 Comments</span>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex align-tems-center justify-content-center">
                  <Icon.Heart className="px-1" />
                  <span className="px-1">Like</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-5">
          <div className="container-blog-bg mx-auto">
            <p className="text-secondary h5 py-5 ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. You need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend toitrrepeat predefined chunks.
            </p>
            <div className="mx-auto">
              <img className="img-fluid" src={bgImage} alt="blogs_img" />
            </div>
            <p className="text-secondary h5 py-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. You need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend toitrrepeat predefined chunks.
            </p>
            <p className="text-secondary h5">
              Necessary, making this the first true generator on the Internet.
              It re are many variations of passages of Lo rem Ipsum available,
              but the majority have suffered alteration in some form, by
              injectedeed eedhumour, or randomised words which don't look even
              slightly believable.
            </p>
            <div className="italic-width mx-auto">
              <p className="h4 fw-bold text-center py-5">
                <i>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes.
                </i>
              </p>
            </div>
            <div>
              <p className="text-secondary h5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat predefined chunks. Necessary,
                making this the first true generator on the Internet. It re are
                many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injectedeed
                eedhumour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>
          </div>
          <div className="row lists-container mx-auto pt-5">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <img
                src={blogsingle}
                className="img-fluid"
                alt="blogsingle_photo"
              />
              <span className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </span>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <p className="text-secondary h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo .
              </p>
              <h3 className="py-4">Ordered & Unordered Lists.</h3>
              <ul>
                <li className="text-secondary h5">
                  Yet this above sewed flirted opened ouch
                </li>
                <li className="text-secondary h5">
                  Goldfinch realistic sporadic ingenuous
                </li>
                <li className="text-secondary h5">
                  Abominable this abidin far successfully then like piquan
                </li>
                <li className="text-secondary h5">Risus commodo viverra</li>
                <li className="text-secondary h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </li>
              </ul>
              <h3 className="py-4">Ordered & Unordered Lists.</h3>
              <ul>
                <li className="text-secondary h5">
                  Yet this above sewed flirted opened ouch
                </li>
                <li className="text-secondary h5">
                  Goldfinch realistic sporadic ingenuous
                </li>
                <li className="text-secondary h5">
                  Abominable this abidin far successfully then like piquan
                </li>
                <li className="text-secondary h5">Risus commodo viverra</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white ">
          <div className="italic-width mx-auto">
            <p className="text-secondary h5 pb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum. You need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend toitrrepeat predefined chunks. Necessary, making
              this the first true generator on the Internet. It re are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injectedeed eedhumour,
              or randomised words which don't look even slightly believable.
            </p>
            <iframe
              className="video-style rounded-3"
              src="https://www.youtube.com/embed/V685_4XUz2Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="italic-width mx-auto">
            <div className="container">
              <p className="text-secondary pt-5 h5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum. You need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend toitrrepeat predefined chunks. Necessary,
                making this the first true generator on the Internet. It re are
                many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injectedeed
                eedhumour, or randomised words which don't look even slightly
                believable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container mx-auto bg-white pb-5">
          <h1 className="pb-4">Leave a Reply</h1>
          <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1">
            <div className="col">
              <TextField
                id="outlined-basic"
                className="mb-3 p-1 w-100"
                label="Name"
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                className="mb-3 p-1 w-100"
                label="Email"
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                className="mb-3 p-1 w-100"
                label="Website"
                variant="outlined"
              />
              <br />
              <Button
                variant="contained"
                color="error"
                className="px-5 py-3 fw-bold mb-3"
              >
                SEND MESSAGE
              </Button>
            </div>
            <div className="col">
              <TextField
                id="outlined-multiline-flexible"
                label="Comment"
                multiline
                rows={8}
                className="p-1 w-100 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
