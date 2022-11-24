import React, { useState } from "react";
import { Button, AppBar, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./todo.css";
import todo from "./assets/to-do.jpg";
import Sidebar from "./sidebar";

const ToDoList = () => {
  const [item, setItem] = useState("hello");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const list = () => {
    setNewItem((prevVal) => {
      return [...prevVal, item];
    });
  };
  return (
    <div>
      <Sidebar />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${440}px)`,
          ml: `${440}px`,
        }}
      >
        <img src={todo} height="200px" />
      </AppBar>
      ;
      <Box
        position="fixed"
        sx={{
          width: `calc(100% - ${440}px)`,
          ml: `${440}px`,
          marginTop: 12,
        }}
      >
        <div className="main-div">
          <div className="center-div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder="Add it here" onChange={itemEvent} />
            <Button
              className="newBtn"
              onClick={list}
              sx={{
                width: "50px",
                height: "55px",
                backgroundColor: "#16a085",
                color: "white",
              }}
            >
              <AddIcon />
            </Button>
            <ol>
              {newitem.map((val) => {
                return <li>{val}</li>;
              })}
            </ol>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default ToDoList;
