import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Jobs from "./pages/Jobs/Jobs";
import SavedJobs from "./pages/SavedJobs/SavedJobs";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

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
    if (!savedJobs.some((savedJob) => savedJob.id === job.id)) {
      const currentJobs = [...savedJobs, job];

      setSavedJobs(currentJobs);

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(currentJobs)
      );

      toast.success("Job saved successfully!");
    } else {
      toast.warning("Job already saved!");
    }
  };

  // Function to remove a saved job
  const handleRemoveJob = (id) => {
    if (confirm("Are you sure?")) {
      const updatedJobs = savedJobs.filter(
        (job) => job.id !== id
      );

      setSavedJobs(updatedJobs);

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(updatedJobs)
      );
    }
  };

  // Function to save applied jobs
  const handleAppliedJobs = (job) => {
    const jobWithStatus = {
      ...job,
      status: "Applied",
    };

    if (
      !appliedJobs.some(
        (item) => item.id === jobWithStatus.id
      )
    ) {
      const currentJobs = [...appliedJobs, jobWithStatus];

      setAppliedJobs(currentJobs);

      localStorage.setItem(
        "appliedJobs",
        JSON.stringify(currentJobs)
      );

      toast.success("Applied successfully!");
    } else {
      toast.warning(
        "You have already applied for this job!"
      );
    }
  };

  // Function to remove an applied job
  const handleRemoveAppliedJobs = (id) => {
    if (confirm("Are you sure?")) {
      const updatedJobs = appliedJobs.filter(
        (job) => job.id !== id
      );

      setAppliedJobs(updatedJobs);

      localStorage.setItem(
        "appliedJobs",
        JSON.stringify(updatedJobs)
      );
    }
  };

  // Function to change the status of an applied job
  const changeStatus = (jobId, status) => {
    const updatedJobs = appliedJobs.map((item) => {
      if (item.id === jobId) {
        return {
          ...item,
          status,
        };
      }

      return item;
    });

    setAppliedJobs(updatedJobs);

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify(updatedJobs)
    );
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              savedJobs={savedJobs}
              appliedJobs={appliedJobs}
            />
          }
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
            <SavedJobs
              savedJobs={savedJobs}
              handleRemoveJob={handleRemoveJob}
              handleAppliedJobs={handleAppliedJobs}
            />
          }
        />

        <Route
          path="/applied-jobs"
          element={
            <AppliedJobs
              appliedJobs={appliedJobs}
              changeStatus={changeStatus}
              handleRemoveAppliedJobs={
                handleRemoveAppliedJobs
              }
            />
          }
        />

        <Route
          path="/jobs/:id"
          element={
            <JobDetails
              handleAppliedJobs={handleAppliedJobs}
              appliedJobs={appliedJobs}
            />
          }
        />

        {/*
          The "*" route is called the wildcard route.

          It matches any URL that doesn't match the routes defined above.

          Examples:
          "/"             -> Home Page
          "/jobs"         -> Jobs Page
          "/saved-jobs"   -> Saved Jobs
          "/xyz"          -> Not Found Page

          This route should always be placed at the end of the
          <Routes> component. If no route matches, React Router
          automatically renders the NotFound component.
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />
      <Footer />
    </>
  );
}

export default App;