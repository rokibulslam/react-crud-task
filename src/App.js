import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Update from './Components/Dashboard/UpdateUser/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/update/:id" element={<Update></Update>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
