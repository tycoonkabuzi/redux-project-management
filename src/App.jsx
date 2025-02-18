import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./components/Products";
import { Routes, Route } from "react-router";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />}>
          <Route path="all" element={<ListProduct />} />
          <Route path="/completed" element={<ListProduct />} />
          <Route path="/pending" element={<ListProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
// Here’s a visual representation of the application as a simple wireframe:

// A heading for "Task Manager"
// An input field for adding a new task (description + priority selection)
// A button to add the task
// A task list displaying:
// Task description
// Priority label
// A checkbox to mark as completed
// A delete button to remove the task
