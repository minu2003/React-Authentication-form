import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Button, IconButton, List, ListItem, ListItemText, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const BackgroundBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0', 
}));

const ToDoBox = styled(Box)(({ theme }) => ({
  backdropFilter: 'blur(8px)',
  borderRadius: '20px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  width: '500px',
  minHeight:'300px',
  height: 'auto',
  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  padding: theme.spacing(3),
}));

const AddTaskBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.spacing(3),
}));

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle adding new task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // Handle deleting a task
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  // Handle editing a task
  const editTask = (indexToEdit) => {
    const taskToEdit = tasks[indexToEdit];
    setTask(taskToEdit);
    deleteTask(indexToEdit); // Remove the old task and allow editing
  };

  return (
    <BackgroundBox>
      <ToDoBox>
        <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
          ToDo List
        </Typography>

        <AddTaskBox>
          <TextField
            fullWidth
            placeholder="Add your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            sx={{ backgroundColor: "#f5f5f5", borderRadius: "20px", marginRight: "10px" }}
          />
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: "20px", padding: "10px 20px" }}
            onClick={addTask}
          >
            ADD
          </Button>
        </AddTaskBox>

        {/* Task List */}
        <List sx={{ marginTop: "30px", maxHeight: "400px", overflowY: "auto" }}>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ListItemText primary={task} />
              <Box>
                <IconButton color="primary" onClick={() => editTask(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => deleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </ToDoBox>
    </BackgroundBox>
  );
};

export default ToDoList;
