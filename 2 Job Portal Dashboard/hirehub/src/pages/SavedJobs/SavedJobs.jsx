import JobCard from "../../components/JobCard/JobCard";
const SavedJobs = ({ savedJobs, handleRemoveJob }) => {

  return <>
    {savedJobs.map((job) => (
      <div className="col-lg-4 col-md-6 col-sm-12" key={job.id}>
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
    ))}
  </>
}
export default SavedJobs;