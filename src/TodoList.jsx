import React, { useState } from "react";


function TodoList() {
  const [todo, setTodo] = useState({
    task: "",
    prio: "",
    date: "",
    time: "",
  });
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, taskIndex) => taskIndex !== index);
    setList(updatedList);
  };

  const handleUpdate = (index) => {
    const taskToEdit = list[index];
    setTodo({
      task: taskToEdit.task,
      prio: taskToEdit.prio,
      date: taskToEdit.date,
      time: taskToEdit.time,
    });
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const handleAddTodo = () => {
    if (todo.task.trim()) {
      const newTask = {
        ...todo,
        timestamp: new Date().toLocaleString(), // Add timestamp
      };
      setList([...list, newTask]);
      setTodo({
        task: "",
        prio: "",
        date: "",
        time: "",
      });
    }
  };

  return (
    <div className="container">
      <h1 className="main_title">TO DO LIST</h1>
      <h2 className="second_title">What's the plan Today</h2>

      <div>
        <div className="inputs">
          
        <label htmlFor="new_task">NEW TASK !</label>
        <br />
        <input
          type="text"
          id="task"
          name="task"
          value={todo.task}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="date">When ?</label>
        <br />
        <input
          type="date"
          id="date"
          name="date"
          value={todo.date}
          onChange={handleInputChange}
        />
         <br />
        <label htmlFor="date">Time ?</label>
        <br />
        <input
          type="time"
          id="time"
          name="time"
          value={todo.time}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="priority">Priority level</label>
        <br />
        <select
          name="prio"
          id="prio"
          value={todo.prio}
          onChange={handleInputChange}
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="ASAP">ASAP!!</option>
        </select>
        </div>
        <br />
        <button onClick={handleAddTodo} className="btn_task">Add Task</button>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Time</th>
              <th>Added On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((task, index) => (
              <tr key={index}>
                <td>{task.task}</td>
                <td>{task.prio}</td>
                <td>{task.date}</td>
                <td>{task.time}</td>
                <td>{task.timestamp}</td>
                <td>
                  <button onClick={() => handleDelete(index)}className="btn_delete">DELETE</button>{" "}
                  <button onClick={() => handleUpdate(index)}className="btn_update">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
