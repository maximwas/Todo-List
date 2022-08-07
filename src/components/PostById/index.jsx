import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../../feature/Post/postSlice";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const PostById = () => {
  const { id } = useParams();
  const post = useSelector(getPostById(id));

  return (
    <Box sx={{
      p: "10px 20px"
    }} className="post">
      <Box
        sx={{
          m: "10px 0",
        }}
      >
        <Button
          to="/post"
          variant='contained'
          sx={{
            minHeight: "40px",
          }}
          component={Link}
        >Back</Button>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body1">{post.body}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostById;
