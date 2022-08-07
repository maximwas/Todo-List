import ListToDoItem from "../ListToDoItem";
import {
  List,
  Button,
  TextField,
  Grid,
  Modal,
  Box,
  Collapse,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";

import { v4 as uuidv4 } from "uuid";
import {
  setNewTask,
  setListStore,
  removeTask,
  editTask,
  setSearchList,
  getSliceToDoListState,
} from "../../feature/toDoList/toListSlice";

import "./index.scss";

const ToDoList = () => {
  const { list, edit, searchList } = useSelector(getSliceToDoListState);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [openEditPopup, setOpenEditPopup] = useState(false);

  useEffect(() => {
    dispatch(setListStore(JSON.parse(localStorage.getItem("toDoList")) || []));
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

  const searchListChange = (event) => {
    const value = event.target.value;
    const findList = list.filter((item) => item.text.includes(value));

    setSearch(value);
    dispatch(setSearchList(findList));
  };

  const getList = (list) => {
    return (
      <List
        sx={{
          fontFamily: "Roboto",
          fontSize: "16px",
        }}
      >
        {list?.length ? (
          <TransitionGroup>
            {list.map((item) => (
              <Collapse key={item.id}>
                <ListToDoItem
                  editItem={() => editItem(item.id)}
                  removeItem={() => dispatch(removeTask(item.id))}
                  item={item}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        ) : (
          <p>No list</p>
        )}
      </List>
    );
  };

  return (
    <Box className="to-do-list">
      <Box className="wrapper">
        <Box className="search">
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#ffffff",
              },
            }}
            onChange={searchListChange}
            variant="outlined"
            type="text"
            placeholder="Search"
            name="search"
            required={true}
            value={search}
            fullWidth={true}
          />
        </Box>
        <Box className="wrapper-list">
          {search ? getList(searchList) : getList(list)}
        </Box>
        <Box className="add-task">
          <Grid container alignItems="center">
            <Grid item xs={9}>
              <TextField
                onKeyDown={(ev) => {
                  if (ev.key === "Enter") {
                    changeList();
                  }
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#ffffff",
                  },
                }}
                variant="outlined"
                onChange={(event) => setTask(event.target.value)}
                type="text"
                placeholder="New Task"
                name="add-task"
                required={true}
                value={task}
                fullWidth={true}
              />
            </Grid>
            <Grid container justifyContent="flex-end" item xs={3}>
              <Button variant="contained" onClick={changeList}>
                Add Task
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Modal open={openEditPopup} onClose={() => setOpenEditPopup(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "25%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#ffffff",
                },
              }}
              onChange={changeEditTask}
              type="text"
              placeholder="Edit Task"
              name="edit-task"
              required={true}
              value={edit.text}
            />
            <Button variant="contained" onClick={editTaskHandler}>
              Edit Task
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default ToDoList;
