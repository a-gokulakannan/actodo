// import Header from "./components/Header";
// import Card from "./components/Card";
// import TodoContainer from "./components/TodoContainer";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Landing from './Pages/Landing';

function App() {
  const [users, setUsers] = useState([
    {
      username: "agkannan",
      password: "123@"
    }
  ])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
          <Route path='/login' element={<Login users={users} setUsers={setUsers} />}></Route>
          <Route path='/signup' element={<Signup users={users} setUsers={setUsers} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
