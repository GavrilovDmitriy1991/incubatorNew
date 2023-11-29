import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SearchScreen } from "./SearchScreen";
import { Route, Routes } from "react-router-dom";
import { AddNewCustomerScreen } from "./AddNewCustomerScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchScreen />} />
      <Route path="/AddNewCustomerScreen" element={<AddNewCustomerScreen />} />
    </Routes>
  );
}

export default App;
