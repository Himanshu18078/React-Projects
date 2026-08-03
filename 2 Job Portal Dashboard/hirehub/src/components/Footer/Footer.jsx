import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaBriefcase
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">

        <div className="row">

          <div className="col-md-6">
            <h3>
              <FaBriefcase className="me-2" />
              HireHub
            </h3>

            <p className="text-light mt-3">
              Your one-stop platform to search, save and
              manage your dream jobs.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>
                <Link
                  to="/"
                  className="text-decoration-none text-light"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/jobs"
                  className="text-decoration-none text-light"
                >
                  Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/saved-jobs"
                  className="text-decoration-none text-light"
                >
                  Saved Jobs
                </Link>
              </li>

              <li>
                <Link
                  to="/applied-jobs"
                  className="text-decoration-none text-light"
                >
                  Applied Jobs
                </Link>
              </li>

            </ul>
          </div>

          <div className="col-md-3">
            <h5>Connect</h5>

            <div className="fs-3">

              <a
                href="https://github.com/"
                className="text-light me-3"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                className="text-light"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 HireHub. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;