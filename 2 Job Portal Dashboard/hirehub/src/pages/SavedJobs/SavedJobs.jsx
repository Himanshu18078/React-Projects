import JobCard from "../../components/JobCard/JobCard";

const SavedJobs = ({ savedJobs, handleRemoveJob }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Saved Jobs</h1>
      <div className="row g-4">
        {savedJobs.length === 0 ? (<h1>No Saved Job</h1>) : (
          savedJobs.map((job) => (
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
                isSaved={true}
                handleRemoveJob={handleRemoveJob}
              />
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default SavedJobs;