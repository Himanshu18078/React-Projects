import JobCard from "../../components/JobCard/JobCard";

const AppliedJobs = ({ appliedJobs }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Applied Jobs</h1>

      <div className="row g-4">
        {appliedJobs.map((job) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            key={job.id}
          >
            <JobCard
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              isApplied={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;