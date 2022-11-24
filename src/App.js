import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Daily from "./components/daily";
import Goals from "./components/goals";
import Sidebar from "./components/sidebar";
import ToDoList from "./components/todo";
import Logup from "./Log/Logup";
import Login from "./Log/Login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todo" element={<ToDoList />}></Route>
        <Route path="/daily" element={<Daily />}></Route>
        <Route path="/goals" element={<Goals />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
