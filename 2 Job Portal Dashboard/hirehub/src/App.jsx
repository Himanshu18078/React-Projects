import { Route ,Routes } from "react-router-dom"
import Jobs from "./pages/Jobs/Jobs"
import SavedJobs from "./pages/SavedJobs/SavedJobs"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import "./App.css";
function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element = {<Jobs/>}></Route>
      <Route path="/saved-jobs" element = {<SavedJobs/>}></Route>
    </Routes>
  </>
  )
}

export default App
