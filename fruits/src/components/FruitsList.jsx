import Counter from "./Counter";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";

function FruitsList({ fruitsList, deleteFromList, editFruit }) {
  const jsx = fruitsList.map((fruit) => (
    <List key={fruit}>
      <ListItem disablePadding>
        <Button variant="outlined" onClick={() => editFruit(fruit, "🍎")}>
          Edit
        </Button>
        <ListItemButton>
          <ListItemIcon onClick={() => deleteFromList(fruit)}>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary={fruit} />
        </ListItemButton>
      </ListItem>
    </List>
  ));

  const counter = fruitsList.length;

  return (
    <div>
      <div>{jsx}</div>
      <Counter count={counter} />
    </div>
  );
}

export default FruitsList;
