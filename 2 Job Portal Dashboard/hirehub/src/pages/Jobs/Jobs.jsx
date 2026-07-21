import jobs from "../../data/jobs";
import JobCard from "../../components/JobCard/JobCard";

const Jobs = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Find Your Dream Job</h1>

      <div className="row g-4">
        {jobs.map((job) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={job.id}>
            <JobCard
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;