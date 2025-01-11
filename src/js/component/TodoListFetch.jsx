import React, { useState, useEffect } from "react";

export const ToDoListFetch = () => {
    const baseURL = 'https://playground.4geeks.com/todo';
    const user = 'bhgeeky';
    const [ isEdit, setIsEdit ] = useState(false);
    const [ newTask, setNewTask ] = useState("");
    const [ todos, setTodos ] = useState([]);
    const [ editTask, setEditTask ] = useState({});
    const [ labelEdit, setLabelEdit ] = useState('');
    const [ completedEdit, setCompletedEdit ] = useState()

    const handleSubmitAdd = async (event) => {
        event.preventDefault();
        if (!newTask.trim()) return;

        const dataToSend = {
             label: newTask, 
             is_done: false,
        };
        const uri = `${baseURL}/todos/${user}`
        const options = {
            method: 'POST' ,
            headers: {
                "Content-Type" : "application/json"
            },

            body: JSON.stringify(dataToSend)
        };
        const response = await fetch(uri, options);
        if(!response.ok) {
            console.log('error;', response.status, response.statusText );
            return
        };
        //const data = await response.json();
        setNewTask('')
        getTodos()
        
    };

    const handleDelete = async (taskId) => {
        const uri = `${baseURL}/todos/${taskId}`
        const options = {
            method: 'DELETE',

        };
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log('error;', response.status, response.statusText );
            return
        }
        //const data = await response.json()
        getTodos();
    };

    const handleEdit = (taskEdit) => {
        setIsEdit(true);
        setEditTask(taskEdit);
        setLabelEdit(taskEdit.label);
        setCompletedEdit(taskEdit.is_done);

    };

    const getTodos = async () => {
        const uri = `${baseURL}/users/${user}`;
        const options = {
            method: 'GET'
        };
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log('error:', response.status, response.statusText);
            return
            
        };
        const data = await response.json();
        setTodos(data.todos);
    };

    const handleSubmitEdit = async (event) => {
        event.preventDefault();
        const dataToSend = {
            label: labelEdit,
            is_done: completedEdit,
        };
        const uri = `${baseURL}/todos/${editTask.id}`
        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        };
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log('error;', response.status, response.statusText );
            return
        };
        getTodos();
        setIsEdit(false);
        setEditTask({});
        setLabelEdit('');
        setCompletedEdit(false);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmitAdd(event);
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-success text-center">To do List</h1>
            {isEdit ?
            <form onSubmit={handleSubmitEdit}>
               
                <div className="text-start mb-3">
                    <label htmlFor="editTask" className="form-label">Edit Task</label>
                    <input type="text" className="form-control" 
                    onChange={(event) => setLabelEdit(event.target.value)}/>
                </div>
                <div className="text-start mb-3 form-check">
                    <input type="checkbox" className="form-check-input" 
                    checked={completedEdit} onChange={(event) => setCompletedEdit(event.target.checked)}/>
                        <label className="form-check-label">Completed</label>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
                <button type="reset" className="btn btn-secondary"
                onClick={() => setIsEdit(false)}>
                    Cancel</button>
            </form>

            :

            <form onSubmit={handleSubmitAdd}>
                <div className="text-start mb-3">
                    <label hmtlhtmlFor="exampleTask" className="form-label">New Task</label>
                    <input type="text" className="form-control" id="exampleTask"
                        value={newTask} onChange={(event) => setNewTask(event.target.value)}
                        onKeyPress={handleKeyPress} />
                </div>
                <button type="submit" className="btn btn-primary">Add Task</button>
            </form>

            }
            <h2 className="text-primary text-center mt-5">List</h2>
            <ul className="text-start list-group">
                {todos.map((item, i) => (
                <li key={item.id} 
                className="list-group-item hidden-icon d-flex justify-content-between">
                    <div>
                    {item.isDone ? (
                    <i className="fa-regular fa-thumbs-up text-success me-2"></i> )
                    :
                    (<i className="fa-solid fa-circle-xmark text-danger me-2"></i>
                     )}
                    {item.label}
                    </div>
                    <div>
                        <span
                        onClick={() => handleEdit(item)}
                        className="fa-solid fa-pen-to-square text-primary me-2"
                        style={{ cursor : 'pointer'}}>
                            🖉
                        </span>    

                        <span
                        onClick={() => handleDelete(item.id)}
                        className="fa-solid fa-trash text-danger"
                        style={{ cursor : 'pointer'}}>
                            X
                        </span>
                    </div>
                </li>))}
                <li className="list-group-item text-end">
                    {todos.length === 0 ? 
                    "No newTasks, please add a new one" 
                    : 
                    `${todos.length} task${todos.length > 1 ? 's' : ''}`}
                </li>
            </ul>
        </div>
    )
    
};



                    



