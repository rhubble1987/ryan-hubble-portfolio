import React from "react";

function Home() {
    return (
        <div className="card my-5 mx-sm-5 bg-light">
          <div className="card-header"><h1>Hi there!</h1></div>
          <div className="card-body text-sm-left">
            <img
              className="img-fluid img-thumbnail float-sm-left mr-sm-3 mb-0"
              src="Assets/Images/headshot.jpeg"
              alt="A bald man that has glasses and a beard."
            />
            <p className="card-text">
              Welcome to my portfolio page! My name is Ryan Hubble, and I am an aspiring full-stack web developer. I currently work
              as a technical account manager at a startup in Columbus, Ohio. My time in my current and previous roles has led me to the decision to
              begin the journey of becoming a developer. Being involved in tech on a daily basis has made me come to love the industry, and now I want to 
              take that next step and actually be able to build this stuff myself!
            </p>
          </div>
        </div>
        
    )
};

export default Home;