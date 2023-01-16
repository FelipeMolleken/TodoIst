import React from "react";
import { useState } from "react";
import './AddTask.css'
import Button from "./Button";

function AddTask({handleTaskAddition}) {

    const [inputData, setInputData] = useState('')

    function handleInputChange(e) {
        setInputData(e.target.value);
    }
    function handleAddTaskClick(){
        handleTaskAddition(inputData);
        setInputData("")
    }

    return (
        <div className="add-task-container">
            <input
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input"
                type="text">
            </input>
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>

    );

}

export default AddTask;