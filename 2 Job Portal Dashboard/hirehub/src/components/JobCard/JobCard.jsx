import { FaBuilding, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import styles from "./JobCard.module.css";

const JobCard = ({ title, company, location, type }) => {
  return (
    <div className={`card ${styles.card}`}>
      <div className="card-body">
        <h4 className={styles.title}>{title}</h4>

        <p className={styles.info}>
          <FaBuilding /> {company}
        </p>

        <p className={styles.info}>
          <FaMapMarkerAlt /> {location}
        </p>

        <p className={styles.info}>
          <FaBriefcase /> {type}
        </p>

        <button className={`btn btn-primary ${styles.button}`}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;