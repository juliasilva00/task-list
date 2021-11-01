import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom';


import "./Task.css"



const Task = ({ task, handleTaskClick, handleTaskDelition }) => {
    const history = useHistory();

    const handleTaksDetailsClick = () => {
        history.push(`/${task.title}`)
    }
    return (
        <div className="task-container" style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container"></div>

            <div className="buttons-container">
                <button className="remove-task-button" onClick={() => handleTaskDelition(task.id)}>
                    <CgClose />
                </button>

                <button className="see-task-detail" onClick={handleTaksDetailsClick} >
                    <CgInfo />
                </button>
            </div>
        </div>
    );
};

export default Task;