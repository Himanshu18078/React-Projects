import { useNavigate, useParams } from "react-router-dom";
import jobs from "../../data/jobs";
const JobDetails = ({handleAppliedJobs,appliedJobs}) => {
  /*
  const params = useParams();
  const id = params.id;
  */
  const { id } = useParams();
  const job = jobs.find((item) => item.id === Number(id));
  if (!job) {
    return <h1>Job Not Found</h1>;
  }
  const navigate = useNavigate();
  const handleApplyButton = () =>{
    handleAppliedJobs(job);
  }
  const isApplied = appliedJobs.some((item) => Number(id) === item.id);
  return (
    <div className="container mt-5">
      <div className="card p-4 mb-3">
        <h1>{job.title}</h1>
        <p><strong>Company : </strong>{job.company}</p>
        <p><strong>Type : </strong>{job.type}</p>
        <p><strong>Location : </strong>{job.location}</p>
      </div>
      <div className="card p-4 mb-3">
        <h3>Description</h3>
        <p>{job.description}</p>
      </div>
      <div className="card p-4 mb-3">
        <h3>Skills</h3>
        <ul>
          {job.skills.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
      <div className="card p-4 mb-3">
        <h3>Responsibilities</h3>
        <ul>
          {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>

      <button
        className="btn btn-secondary"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      {
        !isApplied && <button
        className={`btn btn-primary`}
        onClick={handleApplyButton}
      >
        Apply Now
      </button>
      }
    </div>
  )
}
export default JobDetails;