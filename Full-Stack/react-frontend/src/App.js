import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ListTaskComponent from './components/ListTaskComponent.jsx';
import CreateTaskComponent from './components/CreateTaskComponent.jsx';
import ViewTaskComponent from './components/ViewTaskComponent.jsx';

import ListUserComponent from './components/ListUserComponent.jsx';
import CreateUserComponent from './components/CreateUserComponent.jsx';
import ViewUserComponent from './components/ViewUserComponent.jsx';

import ListGroupComponent from './components/ListGroupComponent.jsx';
import CreateGroupComponent from './components/CreateGroupComponent.jsx';
import ViewGroupComponent from './components/ViewGroupComponent.jsx';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>

                          <Route path = "/" exact component = {ListTaskComponent}></Route>
                          <Route path = "/tasks" component = {ListTaskComponent}></Route>
                          <Route path = "/add-task/:id" component = {CreateTaskComponent}></Route>
                          <Route path = "/view-task/:id" component = {ViewTaskComponent}></Route>

                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/users" component = {ListUserComponent}></Route>
                          <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
                          <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>

                          <Route path = "/" exact component = {ListGroupComponent}></Route>
                          <Route path = "/groups" component = {ListGroupComponent}></Route>
                          <Route path = "/add-group/:id" component = {CreateGroupComponent}></Route>
                          <Route path = "/view-group/:id" component = {ViewGroupComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
