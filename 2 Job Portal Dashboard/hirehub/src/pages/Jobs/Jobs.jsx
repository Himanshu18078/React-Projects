import jobs from "../../data/jobs";
import JobCard from "../../components/JobCard/JobCard";
import { useState } from "react";

const Jobs = ({ handleSavedJobs, handleAppliedJobs }) => {
  //this is for the search bar
  const [jobSearched, setSearchedJob] = useState("");
  //this is for the job type
  const [jobType, setJobType] = useState("all");
  //this is to search by the location
  const [searchLocation, setSearchLocation] = useState("");

  const filterJob = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(jobSearched.toLowerCase());
    const locationSearch = job.location
      .toLowerCase()
      .includes(searchLocation.toLocaleLowerCase());
    const matchesType = jobType === "all" || job.type === jobType;
    return matchesSearch && matchesType && locationSearch;
  });


  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Find Your Dream Job</h1>
      <div className="row g-3">
        <div className="col-md-8">
          <input
            type="search"
            className="form-control mb-4"
            placeholder="Search jobs..."
            onChange={(e) => {
              setSearchedJob(e.target.value);
            }}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select mb-4"
            onChange={(e) => { setJobType(e.target.value) }}>
            <option value="all">All Jobs</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="col-md-8">
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="🔍 Search by location..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </div>
      </div>
      <div className="row g-4">
        {filterJob.length === 0 ? (<h1 >No Such Job Available</h1>) : (filterJob.map((job) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={job.id}>
            <JobCard
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              handleSavedJobs={handleSavedJobs}
              handleAppliedJobs={handleAppliedJobs}
              job={job}

            />
          </div>
        )))}
      </div>
    </div>
  );
};

export default Jobs;