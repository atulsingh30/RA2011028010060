import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Registration from './Registration';
import TrainSchedule from './TrainSchedule';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/trains">Train Schedule</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" component={Registration} />
          <Route path="/trains" component={TrainSchedule} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;