import Input from "./components/Input/index";
import Button from "./components/Button/index";
import ListItem from "./components/ListItem";
import Popup from "./components/Popup";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.scss";

const App = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState({});
  const [openEditPopup, setOpenEditPopup] = useState(false);

  useEffect(() => setList(JSON.parse(localStorage.getItem("toDoList")) || []), []);
  useEffect(() => {
    if (list.length) localStorage.setItem("toDoList", JSON.stringify(list));
  }, [list]);

  const changeList = () => {
    if (task) {
      const newValue = {
        text: task,
        id: uuidv4(),
      };

      setList([...list, newValue]);
      setTask("");
    }
  };

  const changeEditTask = (value) => {
    const newValue = {
      id: editTask.id,
      text: value,
    };

    setEditTask(newValue);
  };

  const editTaskHandler = () => {
    setList(list.map((item) => (item.id === editTask.id ? editTask : item)));
    setOpenEditPopup(false);
    setEditTask({});
  };

  const editItem = (id) => {
    setEditTask(list.find((element) => element.id === id));
    setOpenEditPopup(true);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="wrapper-list">
          <ul className="list">
            {list?.length ? list.map((item, index) => <ListItem editItem={() => editItem(item.id)} removeItem={() => removeItem(item.id)} key={index} item={item}></ListItem>) : <p>No list</p>}
          </ul>
        </div>
        <div className="add-task">
          <Input onEnterKeyDown={changeList} onChange={setTask} type="text" placeholder="New Task" name="add-task" required={true} value={task}></Input>
          <Button onClick={changeList} text="Add Task"></Button>
        </div>
        <Popup show={openEditPopup} close={setOpenEditPopup}>
          <Input onEnterKeyDown={editTaskHandler} onChange={changeEditTask} type="text" placeholder="Edit Task" name="edit-task" required={true} value={editTask.text}></Input>
          <Button onClick={editTaskHandler} text="Edit Task"></Button>
        </Popup>
      </div>
    </div>
  );
};

export default App;
