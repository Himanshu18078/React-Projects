import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Jobs from "./pages/Jobs/Jobs";
import SavedJobs from "./pages/SavedJobs/SavedJobs";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import "./App.css";
function App() {
  /*
    LocalStorage se saved jobs ko get kar rahe hain.

    Agar "savedJobs" localStorage mein exist nahi karta,
    to getItem("savedJobs") null return karega.

    Agar savedJobs ki value null ho gayi, to SavedJobs component mein
    savedJobs.length use karne par error aayega because null ke paas
    .length property nahi hoti.

    Isliye || [] use kiya hai, taaki agar value null aaye
    to savedJobs ko empty array [] mil jaye.
  */
  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || []
  );
  // LocalStorage se applied jobs load kar rahe hain
  const [appliedJobs, setAppliedJobs] = useState(
    JSON.parse(localStorage.getItem("appliedJobs")) || []
  );
  // Function to save a job
  const handleSavedJobs = (job) => {
    /*
      .some() check karta hai ki array mein koi job
      same id ke saath already exist karti hai ya nahi.

      Match mila -> true
      Match nahi mila -> false
    */
    if (!savedJobs.some((savedJob) => savedJob.id === job.id)) {
      const currentJobs = [...savedJobs, job];
      setSavedJobs(currentJobs);
      localStorage.setItem(
        "savedJobs",
        JSON.stringify(currentJobs)
      );
    } else {
      alert("Job Already Saved");
    }
  };
  // Function to remove a saved job
  const handleRemoveJob = (id) => {
    const updatedJobs = savedJobs.filter(
      (job) => job.id !== id
    );
    setSavedJobs(updatedJobs);
    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updatedJobs)
    );
  };
  // Function to save applied jobs
  const handleAppliedJobs = (job) => {
    if (!appliedJobs.some((appliedJob) => appliedJob.id === job.id)) {
      const currentJobs = [...appliedJobs, job];
      setAppliedJobs(currentJobs);
      localStorage.setItem(
        "appliedJobs",
        JSON.stringify(currentJobs)
      );
    } else {
      alert("You have already applied for this job");
    }
  };


  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/jobs"
          element={
            <Jobs
              handleSavedJobs={handleSavedJobs}
              handleAppliedJobs={handleAppliedJobs}
            />
          }
        />
        <Route
          path="/saved-jobs"
          element={
            <SavedJobs savedJobs={savedJobs} handleRemoveJob={handleRemoveJob} handleAppliedJobs={handleAppliedJobs}
            />
          }
        />
        <Route
        path="/applied-jobs"
        element = {<AppliedJobs appliedJobs = {appliedJobs}></AppliedJobs>}
        />
      </Routes>
    </>
  );
}

export default App;