import React from "react";

export default function Question() {
  return (
    <section className="bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-warning fw-bold text-center mb-4">
          Questions May be asked...
        </h2>
        <p className="text-center text-secondary mb-5">
          A curated list of important MERN, DevOps, and CS fundamentals questions
          to help with technical interviews.
        </p>

        {/* Question List */}
        <div className="row justify-content-center">
          <div className="col-md-10">

            {/* Card 1 */}
            <div className="card bg-secondary text-light shadow-lg mb-4 border-0 rounded-3">
              <div className="card-body">
                <h5 className="text-warning mb-3">
                  1. What is MERN Stack?
                </h5>
                <p className="mb-0">
                  MERN stands for <strong>MongoDB, Express.js, React.js, Node.js</strong>.
                  It is a JavaScript-based full-stack development framework used to build
                  modern, scalable web applications.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-secondary text-light shadow-lg mb-4 border-0 rounded-3">
              <div className="card-body">
                <h5 className="text-warning mb-3">
                  2. What is the Virtual DOM in React?
                </h5>
                <p className="mb-0">
                  Virtual DOM is a lightweight copy of the real DOM.
                  React updates the Virtual DOM first and then efficiently updates only
                  the changed parts of the actual DOM, improving performance.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-secondary text-light shadow-lg mb-4 border-0 rounded-3">
              <div className="card-body">
                <h5 className="text-warning mb-3">
                  3. What is Docker?
                </h5>
                <p className="mb-0">
                  Docker is a platform used to build, run, and ship applications inside
                  lightweight containers that ensure consistent environments.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-secondary text-light shadow-lg mb-4 border-0 rounded-3">
              <div className="card-body">
                <h5 className="text-warning mb-3">
                  4. Explain CI/CD.
                </h5>
                <p className="mb-0">
                  CI/CD refers to Continuous Integration and Continuous Deployment.
                  It automates the process of testing, building, and deploying software
                  to ensure faster and reliable delivery.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card bg-secondary text-light shadow-lg mb-4 border-0 rounded-3">
              <div className="card-body">
                <h5 className="text-warning mb-3">
                  5. What is Node.js event loop?
                </h5>
                <p className="mb-0">
                  The event loop is responsible for handling asynchronous operations
                  in Node.js, allowing it to run non-blocking code efficiently.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
