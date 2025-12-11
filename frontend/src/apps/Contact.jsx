import React from "react";

export default function Contact() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        
        {/* Heading */}
        <h2 className="text-warning fw-bold text-center mb-3">Contact Me</h2>
        <p className="text-center text-secondary mb-5">
          You can reach out to me through the following contact details.
        </p>

        <div className="row justify-content-center">
          
          {/* Contact Information Card Only */}
          <div className="col-md-6">
            <div className="card bg-secondary text-light border-0 shadow-lg rounded-3 p-4">

              <h5 className="text-warning mb-3">Get in Touch</h5>

              <p className="mb-2">
                <i className="bi bi-person-fill text-warning me-2"></i>
                <strong>Vanshika Mudgal</strong>
              </p>

              <p className="mb-2">
                <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                Dewas, Madhya Pradesh
              </p>

              <p className="mb-2">
                <i className="bi bi-telephone-fill text-warning me-2"></i>
                +91 93026 16620
              </p>

              <p className="mb-2">
                <i className="bi bi-envelope-fill text-warning me-2"></i>
                vanshikamudgal010@gmail.com
              </p>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
