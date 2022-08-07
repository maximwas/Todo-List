import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Zoom,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";

import {
  jsonFetch,
  getPost,
  getPagePosts,
  setPagePosts,
} from "../../feature/Post/postSlice";

import "./index.scss";

const Posts = () => {
  const posts = useSelector(getPost);
  const pagePosts = useSelector(getPagePosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jsonFetch());
  }, []);

  const paginationPost = (_, value) => {
    dispatch(setPagePosts(value));
    dispatch(jsonFetch());
  };

  return (
    <div className="post-wrapper">
      <Grid className="pagination" container justifyContent="center">
        <Pagination
          sx={{
            "& .MuiPagination-ul button, .MuiPagination-ul li > div": {
              color: "#ffffff",
            },
          }}
          defaultPage={1}
          page={pagePosts}
          onChange={paginationPost}
          color="primary"
          count={10}
        ></Pagination>
      </Grid>
      <Grid container component={TransitionGroup}>
        {posts.map((post, index) => (
          <Zoom
            timeout={300}
            style={{
              transitionDelay: `${50 * index}ms`,
            }}
            key={post.id}
          >
            <Grid item xs={4}>
              <Card
                sx={{
                  minHeight: "280px",
                  m: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body1">{post.body}</Typography>
                </CardContent>
                <CardActions sx={{ p: "16px" }}>
                  <Button
                    variant="contained"
                    component={Link}
                    to={`/post/${post.id}`}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Zoom>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
