import React from "react";
import Comments from "../Components/Details.json";
import StudentCard from "../Components/StudentCard";

export default function Students() {
  return (
    <div>
      
      <div class="intro">
        <h2 class="text-center top-top">Meet our Alumni and Experience</h2>
        <p class="text-center">
          Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
          Vestibulum nibh erat, pellentesque ut laoreet vitae.
        </p>
      </div>
      {Comments &&
        Comments.map((comment, i) => {
          return (
            <div key={comment.title}>
              {comment &&
                comment.details.map((data, i) => {
                  if (data.title === "Comments")
                    return (
                      <div key={i}>
                        <div class="team-boxed">
                          <div class="container">
                            <div class="row people">
                              <div class="col-md-6 col-lg-4 item">
                                <div class="box rounded rounded-3">
                                  <img
                                    class="rounded-circle"
                                    src="assets/img/1.jpg"
                                  />
                                  <h3 class="name">{data.name}</h3>
                                  <p class="title">{data.name}</p>
                                  <p class="description">
                                    Aenean tortor est, vulputate quis leo in,
                                    vehicula rhoncus lacus. Praesent aliquam in
                                    tellus eu gravida. Aliquam varius finibus
                                    est, et interdum justo suscipit id. Etiam
                                    dictum feugiat tellus, a semper massa.{" "}
                                  </p>
                                  <div class="social">
                                    <a href="#">
                                      <i class="fa fa-facebook-official"></i>
                                    </a>
                                    <a href="#">
                                      <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                      <i class="fa fa-instagram"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div class="container  col-4">
                          <div class="row people ">
                            <div class="item student-box">
                              <div class="box">
                                <img
                                  class="rounded-circle student-image"
                                  src= {data.image}
                                />
                                <h3 class="name">{data.name}</h3>
                                <p class="title">{data.company}</p>
                                <p class="description">
                                  Aenean tortor est, vulputate quis leo in,
                                  vehicula rhoncus lacus. Praesent aliquam in
                                  tellus eu gravida. Aliquam varius finibus est,
                                  et interdum justo suscipit id. Etiam dictum
                                  feugiat tellus, a semper massa.{" "}
                                </p>
                                <div class="social">
                                  <a href="#">
                                    <i class="fa fa-facebook-official"></i>
                                  </a>
                                  <a href="#">
                                    <i class="fa fa-twitter"></i>
                                  </a>
                                  <a href="#">
                                    <i class="fa fa-instagram"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    );
                })}
            </div>
          );
        })}
         <hr></hr>
    </div>
   
  );
}
