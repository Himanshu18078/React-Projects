import { Route, Routes } from "react-router-dom"
import Jobs from "./pages/Jobs/Jobs"
import SavedJobs from "./pages/SavedJobs/SavedJobs"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import "./App.css";
import { useState } from "react"
function App() {
  const [savedJobs, setSavedJobs] = useState([]);
  // this function is to save the jobs
  const handleSavedJobs = (job) => {
    /* 
    SOME FUNCTION
    .some() array ke elements ko check karta hai ki koi bhi ek element given condition ko satisfy karta hai ya nahi.
    Ek bhi match mila → true
    Koi match nahi mila → false
    */
  if (!savedJobs.some((savedJob) => savedJob.id === job.id)) {
    const currentJobs = [...savedJobs, job];
    setSavedJobs(currentJobs);
  }
  else{
    alert(`Job Alredy saved`)
  }
};
  //this function is to remove the job
  const handleRemoveJob = (id) => {
    const updatedJobs = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updatedJobs);
  };
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/jobs"
        element={<Jobs handleSavedJobs={handleSavedJobs} />}
      />
      <Route path="/saved-jobs" element={<SavedJobs savedJobs={savedJobs} handleRemoveJob={handleRemoveJob} />}></Route>
    </Routes>
  </>
  )
}

export default App
