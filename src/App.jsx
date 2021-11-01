import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';


import "./App.css";
import TaskDetails from './components/TaskDetails';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'Estudar',
            completed: false
        },
        {
            id: '2',
            title: 'Ler Livros',
            completed: true,

        },
    ]);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
            setTasks(data.data);

        };

        fetchTasks();

    }, []);

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) return { ...task, completed: !task.completed }

            return task;
        })

        setTasks(newTasks)
    }

    const handleTaksAddition = (taskTitle) => {
        const newTasks = [...tasks, {
            title: taskTitle,
            id: uuidv4(),
            completed: false,

        }]

        setTasks(newTasks)
    }

    const handleTaskDelition = (taskId) => {
        const newTasks = tasks.filter(task => task.id != taskId)
        setTasks(newTasks)
    }

    return (

        < Router >
            <div className="container">
                <Header />
                <Route path="/" exact render={() => (
                    <>
                        <AddTask handleTaksAddition={handleTaksAddition} />
                        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelition={handleTaskDelition} />

                    </>

                )}
                />
                <Route path="/:taskTitle" exact component={TaskDetails} />
            </div>
        </Router>









    );
};



export default App;