import styles from "./StatCard.module.css";

const StatCard = ({ title, count, icon }) => {
  return (
    <div className={`card ${styles.card}`}>
      <div className="card-body text-center">
        <div className={styles.icon}>
          {icon}
        </div>

        <h5 className="card-title">{title}</h5>

        <h2 className={styles.count}>
          {count}
        </h2>
      </div>
    </div>
  );
};

export default StatCard;