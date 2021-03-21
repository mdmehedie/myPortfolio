import React from "react";
import "./About_team_profile";

function About_team_profile(props) {
  return (
    <div className="bg-white rounded shadow-sm py-5 px-4">
      <img
        src="https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-2_f8dowd.png"
        alt=""
        style={{ width: "7rem", height: "7rem" }}
        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
      />
      <h5 className="mb-0">{props.name}</h5>
      <span class="small text-muted">{props.proffestion}</span>
      <h6 class="small text-uppercase text-muted py-2">{props.designation}</h6>
      <ul className="social mb-0 list-inline mt-3">
        <li className="list-inline-item">
          <a href="#" className="">
            {/* <i className="fa fa-facebook-f"></i> */}
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="social-link">
            {/* <i className="fa fa-twitter"></i> */}
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="social-link">
            {/* <i className="fa fa-instagram"></i> */}
          </a>
        </li>
        <li className="list-inline-item">
          <a href="#" className="social-link">
            {/* <i className="fa fa-linkedin"></i> */}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About_team_profile;
