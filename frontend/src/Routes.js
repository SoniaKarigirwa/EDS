import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/RegisterEmployee/RegisterEmployee';
import EmployeeList from './components/EmployeeList/EmployeeList';
import Pagination from './components/Pagination/Pagination';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/employee-list" component={EmployeeList} />
        <Route path="/pagination" component={Pagination} />
      </Switch>
    </Router>
  );
};

export default Routes;
