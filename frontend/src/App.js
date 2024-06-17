  import React from 'react';
  import './App.css';
  import {BrowserRouter, Routes, Route} from 'react-router-dom'
  import Unauthorized from './components/common/Unauthorized'
  import Login from './components/Login/Login';
  import RegisterEmployee from './components/RegisterEmployee/RegisterEmployee';
  import EmployeeList from './components/EmployeeList/EmployeeList'

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/registeremployee' element={<RegisterEmployee />}></Route>
          <Route path='/employeelist' element={<EmployeeList/>}></Route>
          <Route path='*' element={<Unauthorized />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }

  export default App;