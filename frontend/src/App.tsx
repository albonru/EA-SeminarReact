import { BrowserRouter, Routes, Route} from "react-router-dom";


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
