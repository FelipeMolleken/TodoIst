import React from "react";
import Task from "./Task";
import TaskDetails from "./TaskDetails";
// import { useNavigate as Router, useNavigate } from "react-router-dom";

function Tasks({ tasks, handleTaskClick, handleTaskDeletion }) {

    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                />
            ))}
        </div>
    );
}

export default Tasks