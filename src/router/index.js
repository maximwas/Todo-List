import ToDoList from "../components/ToDoList";
import Posts from "../components/Posts";
import PostById from "../components/PostById";
import DModel from "../components/3DModel";

const router = [
  {
    path: "/",
    element: <ToDoList/>,
  },
  {
    path: "/post",
    element: <Posts/>,
  },
  {
    path: "/post/:id",
    element: <PostById/>,
  },
  {
    path: "/3dmodel",
    element: <DModel/>,
  },
];

export default router;