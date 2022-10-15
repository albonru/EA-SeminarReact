import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import UpdateUser from './Components/UpdateUser';
import UserList from './Components/UserList';
import AddUser from './Components/AddUser';
import NavBar from './Components/NavBar';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <NavBar />
      
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/update/:name" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
