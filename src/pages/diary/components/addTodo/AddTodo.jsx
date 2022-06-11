import react, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./addtodo.scss";

const AddTodo = ({ getInput, handleSubmit, setInputToTodos, inputValue }) => {
  return (
    <div>
      <form className="diary-add-todo-form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          size="small"
          type="text"
          placeholder="Add your todo"
          onChange={getInput}
          value={inputValue}
        />
        <Button onClick={setInputToTodos} size="large">
          <AddIcon />
          <div>Add</div>
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;