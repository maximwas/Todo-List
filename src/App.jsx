import Input from "./components/Input/index";
import Button from "./components/Button/index";
import ListItem from "./components/ListItem";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.scss";

const App = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState({});

  useEffect(() => setList(JSON.parse(localStorage.getItem("toDoList")) || []), []);
  useEffect(() => {
    if (list.length) localStorage.setItem("toDoList", JSON.stringify(list));
  }, [list]);

  const changeValue = (value) => {
    setTask(value);
  };

  const addTask = () => {
    if (task) {
      const newValue = {
        text: task,
        id: uuidv4(),
      };

      setList([...list, newValue]);
      setTask("");
    }
  };

  const editItem = (id) => {
    setEditTask(list.find((element) => element.id === id))
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-list">
          <ul className="list">
            {list?.length ? list.map((item, index) => <ListItem editItem={editItem} removeItem={() => removeItem(item.id)} key={index} item={item}></ListItem>) : <p>No list</p>}
          </ul>
        </div>
        <div className="add-task">
          <Input onEnterKeyDown={addTask} onChange={changeValue} type="text" placeholder="New Task" name="add-task" required={true} value={task}></Input>
          <Button onClick={addTask} text="Add Task"></Button>
        </div>
      </div>
    </div>
  );
};

export default App;
