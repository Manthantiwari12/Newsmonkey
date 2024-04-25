import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" country="in" pagesize={18} category='general' />} />
          <Route exact path="/Business" element={<News setProgress={setProgress} apikey={apikey} key="business" country="in" pagesize={18} category='business' />} />
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" country="in" pagesize={18} category='entertainment' />} />
          <Route exact path="/General" element={<News setProgress={setProgress} apikey={apikey} key="general" country="in" pagesize={18} category='general' />} />
          <Route exact path="/Health" element={<News setProgress={setProgress} apikey={apikey} key="health" country="in" pagesize={18} category='health' />} />
          <Route exact path="/Science" element={<News setProgress={setProgress} apikey={apikey} key="science" country="in" pagesize={18} category='science' />} />
          <Route exact path="/Sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" country="in" pagesize={18} category='sports' />} />
          <Route exact path="/Technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" country="in" pagesize={18} category='technology' />} />
        </Routes>
      </Router>

    </>
  )

}
export default App;

