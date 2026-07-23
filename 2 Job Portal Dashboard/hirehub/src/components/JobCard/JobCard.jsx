import { FaBuilding, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import styles from "./JobCard.module.css";

const JobCard = ({title,company,location,type,job,handleSavedJobs,isSaved,handleRemoveJob,id}) => {
  const saveButton = () =>{
    handleSavedJobs(job)
  }
  const applyButton = () =>{
    alert("Applied for the job successfully");
  }
  const deleteButton = () => {
    handleRemoveJob(id);
  }
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

        <button
          className={`btn btn-primary ${styles.button}`}
          onClick= {applyButton}
        >
          Apply Now
        </button>
        {!isSaved && <button
        className={`btn btn-success ${styles.button}`}
        onClick={saveButton}
        >Save Job</button> }
        {isSaved && <button 
        className = {`${styles.button} btn btn-danger`}
        onClick={deleteButton}
        >Delete</button>}
      </div>
    </div>
  );
};

export default JobCard;