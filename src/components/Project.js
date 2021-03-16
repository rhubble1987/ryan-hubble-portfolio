import React from "react";

function Project(props) {
    return (
    <div className="card my-5 mb-5 mx-sm-5 bg-light">
      <div className="card-header">
          <h3>{props.project.title}</h3>
        </div>
      <div className="row g-0">
        <div className="col-md-4">
          <img
              src={props.project.projectImage}
              className="card-img"
              alt={props.project.altText}
          />
        </div>
        <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {props.project.subtitle}
              </h5>
              <p className="card-text">
                {props.project.description}  
              </p>
            </div>
        </div>
      </div>
        <div className="card-footer">
          <ul className="nav">
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href={props.project.githubRepo}
                ><strong>GitHub repository</strong></a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="_blank"
                href={props.project.deployedApp}
                ><strong>Link to finished product</strong></a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Project;

