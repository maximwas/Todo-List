import { ListItem, ListItemButton, ListItemText, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./index.scss";

const ListToDoItem = ({ item, removeItem, editItem }) => {
  const buttonsListItem = () => {
    return (
      <Grid container>
        <ListItemButton
          onClick={editItem}
          sx={{
            justifyContent: "center",
            bgcolor: "primary.main",
            borderRadius: "10px",
            mx: "2px",
            width: "45px",
            ":hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          <EditIcon
            sx={{
              color: "#ffffff",
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={removeItem}
          sx={{
            justifyContent: "center",
            bgcolor: "error.main",
            borderRadius: "10px",
            mx: "2px",
            width: "45px",
            ":hover": {
              bgcolor: "error.main",
            },
          }}
        >
          <DeleteOutlineIcon
            sx={{
              color: "#ffffff",
            }}
          />
        </ListItemButton>
      </Grid>
    );
  };

  return (
    <ListItem
      sx={{
        backgroundColor: "#fff",
        m: "5px 0",
        p: "15px 10px",
        borderRadius: "4px",
      }}
      secondaryAction={buttonsListItem()}
    >
      <ListItemText
        primary={item.text}
        primaryTypographyProps={{ variant: "body" }}
      />
    </ListItem>
  );
};

export default ListToDoItem;
