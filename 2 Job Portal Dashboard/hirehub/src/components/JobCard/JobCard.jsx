import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaTasks } from "react-icons/fa";
import styles from "./JobCard.module.css";
import { useNavigate } from "react-router-dom";

const JobCard = ({ title, company, location, type, job, handleSavedJobs, isSaved, handleRemoveJob, id, handleAppliedJobs, isApplied, status, changeStatus, handleRemoveAppliedJobs }) => {
  const saveButton = () => {
    handleSavedJobs(job);
  }
  const deleteButton = () => {
    handleRemoveJob(id);
  }
  const applyButton = () => {
    handleAppliedJobs(job);
  }
  const deleteApplied = () => {
    handleRemoveAppliedJobs(id);
  }
  const navigate = useNavigate();
  return (
    <div className={`card ${styles.card}`}>
      <div className="card-body">
        <h4 className={styles.title}>{title}</h4>

        <p className={styles.info}>
          <FaBuilding /> {company}
          {/* here we are using react icons */}
        </p>

        <p className={styles.info}>
          <FaMapMarkerAlt /> {location}
        </p>

        <p className={styles.info}>
          <FaBriefcase /> {type}
        </p>

        {status && (
          <div className="mt-3">
            <p className={styles.info}>
              <FaTasks className="me-2" />
              Status:
              <span
                className={`badge ms-2 ${status === "Applied"
                  ? "bg-primary"
                  : status === "Interview"
                    ? "bg-warning text-dark"
                    : status === "Selected"
                      ? "bg-success"
                      : "bg-danger"
                  }`}
              >
                {status}
              </span>
            </p>

            <select
              className="form-select form-select-sm"
              style={{ maxWidth: "180px", marginBottom: "7px" }}
              value={status}
              onChange={(e) => changeStatus(id, e.target.value)}
              disabled={status === "Selected" || status === "Rejected"}
            >
              <option value="Applied">📄 Applied</option>
              <option value="Interview">🎤 Interview</option>
              <option value="Selected">✅ Selected</option>
              <option value="Rejected">❌ Rejected</option>
            </select>
          </div>
        )}
        <button
          className={`btn btn-primary ${styles.button}`}
          onClick={() => navigate(`/jobs/${id}`)}
        >
          View Details
        </button>
        <button
          onClick={applyButton}
          disabled={isApplied}
          className={`btn ${isApplied ? "btn-success" : "btn-primary"
            } ${styles.button}`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </button>

        {(isApplied) && <button
          className={`btn btn btn-danger ${styles.button}`}
          onClick={deleteApplied}
        >
          Remove Applied
        </button>}
        {!(isSaved || isApplied) && <button
          className={`btn btn-success ${styles.button}`}
          onClick={saveButton}
        >Save Job</button>}
        {isSaved && <button
          className={`${styles.button} btn btn-danger`}
          onClick={deleteButton}
        >Delete</button>}
      </div>
    </div>
  );
};

export default JobCard;