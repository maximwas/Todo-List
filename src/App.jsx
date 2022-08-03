import Input from "./components/Input/index";
import Button from "./components/Button/index";
import ListItem from "./components/ListItem";
import Popup from "./components/Popup";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { setNewTask, setListStore, removeTask, editTask, setSearchList, jsonFetch } from "./redux/action/toDoListAction";

import "./App.scss";

const App = () => {
  const { list, edit, searchList } = useSelector((state) => state.listReducer);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [openEditPopup, setOpenEditPopup] = useState(false);

  useEffect(() => {
    dispatch(setListStore(JSON.parse(localStorage.getItem("toDoList")) || []));
    dispatch(jsonFetch())
  }, []);

  useEffect(() => {
    if (list.length) localStorage.setItem("toDoList", JSON.stringify(list));
  }, [list]);

  const changeList = () => {
    if (task) {
      const payload = {
        text: task,
        id: uuidv4(),
      };

      dispatch(setNewTask(payload));
      setTask("");
    }
  };

  const changeEditTask = (value) => {
    const payload = {
      id: edit.id,
      text: value,
    };

    dispatch(editTask(payload));
  };

  const editTaskHandler = () => {
    const editList = list.map((item) => (item.id === edit.id ? edit : item));

    dispatch(setListStore(editList));
    setOpenEditPopup(false);
    dispatch(editTask({}));
  };

  const editItem = (id) => {
    const findItem = list.find((element) => element.id === id);

    dispatch(editTask(findItem));
    setOpenEditPopup(true);
  };

  const searchListChange = (value) => {
    const findList = list.filter((item) => item.text.includes(value));

    setSearch(value);
    dispatch(setSearchList(findList));
  };

  const getList = (list) => {
    return (
      <ul className="list">
        {list?.length ? (
          <TransitionGroup className="todo-list">
            {list.map((item) => (
              <CSSTransition key={item.id} timeout={500} classNames="item">
                <ListItem editItem={() => editItem(item.id)} removeItem={() => dispatch(removeTask(item.id))} item={item} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <p>No list</p>
        )}
      </ul>
    );
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="search">
          <Input onChange={searchListChange} type="text" placeholder="Search" name="search" required={true} value={search} />
        </div>
        <div className="wrapper-list">{search ? getList(searchList) : getList(list)}</div>
        <div className="add-task">
          <Input onEnterKeyDown={changeList} onChange={setTask} type="text" placeholder="New Task" name="add-task" required={true} value={task} />
          <Button className="add-task-button" onClick={changeList} text="Add Task"></Button>
        </div>
        <Popup show={openEditPopup} close={setOpenEditPopup} className="popup-edit">
          <Input onEnterKeyDown={editTaskHandler} onChange={changeEditTask} type="text" placeholder="Edit Task" name="edit-task" required={true} value={edit.text} />
          <Button className="edit-task-button" onClick={editTaskHandler} text="Edit Task"></Button>
        </Popup>
      </div>
    </div>
  );
};

export default App;
