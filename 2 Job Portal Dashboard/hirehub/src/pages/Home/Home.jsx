import StatCard from "../../components/StatCard/StatCard";
import jobs from "../../data/jobs";

import {
  FaBriefcase,
  FaHeart,
  FaClipboardCheck
} from "react-icons/fa";

const Home = ({ savedJobs, appliedJobs }) => {
  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-4">
          <StatCard
            title="Total Jobs"
            count={jobs.length}
            icon={<FaBriefcase />}
          />
        </div>

        <div className="col-md-4">
          <StatCard
            title="Saved Jobs"
            count={savedJobs.length}
            icon={<FaHeart />}
          />
        </div>

        <div className="col-md-4">
          <StatCard
            title="Applied Jobs"
            count={appliedJobs.length}
            icon={<FaClipboardCheck />}
          />
        </div>

      </div>
    </div>
  );
};

export default Home;