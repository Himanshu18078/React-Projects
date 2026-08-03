import StatCard from "../../components/StatCard/StatCard";
import jobs from "../../data/jobs";
import { useNavigate } from "react-router-dom";

import {
  FaBriefcase,
  FaHeart,
  FaClipboardCheck,
  FaArrowRight
} from "react-icons/fa";

const Home = ({ savedJobs, appliedJobs }) => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">

      {/* Hero Section */}
      <div className="bg-primary text-white rounded p-5 mb-5 shadow">
        <h1 className="fw-bold">Welcome to HireHub 👋</h1>

        <p className="lead mt-3">
          Search jobs, save your favourites and keep track of all your
          applications in one place.
        </p>

        <button
          className="btn btn-light mt-3"
          onClick={() => navigate("/jobs")}
        >
          Browse Jobs <FaArrowRight className="ms-2" />
        </button>
      </div>

      {/* Statistics */}
      <div className="row g-4">

        <div className="col-lg-4 col-md-6">
          <StatCard
            title="Total Jobs"
            count={jobs.length}
            icon={<FaBriefcase />}
          />
        </div>

        <div className="col-lg-4 col-md-6">
          <StatCard
            title="Saved Jobs"
            count={savedJobs.length}
            icon={<FaHeart />}
          />
        </div>

        <div className="col-lg-4 col-md-6">
          <StatCard
            title="Applied Jobs"
            count={appliedJobs.length}
            icon={<FaClipboardCheck />}
          />
        </div>

      </div>

      {/* Quick Actions */}
      <div className="card shadow mt-5">
        <div className="card-body">

          <h3 className="mb-3">Quick Actions</h3>

          <div className="d-flex flex-wrap gap-3">

            <button
              className="btn btn-primary"
              onClick={() => navigate("/jobs")}
            >
              Browse Jobs
            </button>

            <button
              className="btn btn-success"
              onClick={() => navigate("/saved-jobs")}
            >
              Saved Jobs
            </button>

            <button
              className="btn btn-warning"
              onClick={() => navigate("/applied-jobs")}
            >
              Applied Jobs
            </button>

          </div>

        </div>
      </div>

      {/* Motivation Card */}
      <div className="card mt-5 shadow border-0 bg-light">
        <div className="card-body text-center">

          <h3>🚀 Keep Growing</h3>

          <p className="text-muted mt-3">
            Every application brings you one step closer to your dream job.
            Keep learning, keep applying, and never stop improving your skills.
          </p>

        </div>
      </div>

    </div>
  );
};

export default Home;