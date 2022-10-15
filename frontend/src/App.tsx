import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import UserList from './Components/UserList';
import AddUser from './Components/AddUser';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>

      <NavBar />
      
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
