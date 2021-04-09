import React from "react";
import ResumeFile from "../Assets/PDFs/ryan_hubble_resume_20210409.pdf";

function Resume() {
    return (
    <main>
        <section className="card w-75 mx-auto my-5">
            <div className="card-body w-100 mx-auto text-center">
                <iframe title="ryan-hubble-resume" width="75%" height="1000" src={ResumeFile}>Resume</iframe>
            </div>
        </section>
    </main>
    );
};

export default Resume;