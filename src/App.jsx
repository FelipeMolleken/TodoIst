import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Tasks from './components/Tasks';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar",
      completed: false,
    },
    {
      id: "2",
      title: "Ler",
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    };
    fetchTasks();
  }, [])

  function handleTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task;
    });
    setTasks(newTasks)
  }

  function handleTaskAddition(taskTitle) {
    const newTasks = [...tasks,
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }];
    setTasks(newTasks);
  }
  function handleTaskDeletion(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </div>
            }
          ></Route>
          <Route
            path="/:taskTitle"
            element={<TaskDetails />}>

          </Route>
        </Routes>
      </div >
    </Router>
  )
}

export default App;