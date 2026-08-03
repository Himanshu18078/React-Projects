import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ height: "80vh" }}
    >
      <h1
        className="fw-bold text-danger"
        style={{ fontSize: "7rem" }}
      >
        404
      </h1>

      <h2 className="mb-3">Page Not Found</h2>

      <p className="text-muted mb-4">
        Oops! The page you are looking for doesn't exist.
      </p>

      <button
        className="btn btn-primary px-4"
        onClick={() => navigate("/")}
      >
        🏠 Go to Home
      </button>
    </div>
  );
};

export default NotFound;