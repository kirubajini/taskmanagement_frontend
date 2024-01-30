'use client'
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Task from "./components/task/Task";
import Profile from "./components/profile/Profile";
import TaskDetails from "./components/taskdetails/TaskDetails";
import UserList from "./components/userlist/UserList";
import TaskList from "./components/tasklist/TaskList";
import OurReport from "./components/report/OurReport";
import { Report } from "@mui/icons-material";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/task" element={<Task />} />
        <Route path="/task/:taskId" element={<TaskDetails />} />
        <Route path="/report" element={<OurReport />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/userList/" element={<UserList />} />
        <Route path="/taskList/" element={<TaskList />} />
      </Routes>
    </Router>
  );
};

export default App;
