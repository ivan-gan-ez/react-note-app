import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "sonner";

import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

function CategoriesPage() {
  // 0 load data from local storage
  const dataInLocalStorage = localStorage.getItem("categories");
  // 1 declare "categories" state to manage the list (if date empty, pass in [])
  const [categories, setCategories] = useState(
    dataInLocalStorage ? JSON.parse(dataInLocalStorage) : []
  );
  // 2 state for the add new category field
  const [label, setLabel] = useState("");

  // 3 function to add new category and save it in local storage
  const handleAddNew = () => {
    // 3.25 make sure field is not empty
    if (label === "") {
      toast("Please fill in the label");
    } else {
      // 3.5 add new category to state
      const updatedCategories = [
        ...categories,
        {
          id: nanoid(),
          label: label,
        },
      ];
      setCategories(updatedCategories);
      // 3.75 update local storage
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      setLabel("");
      toast(`Category "${label}" successfully added!`);
    }
  };

  // 4. function to update category name
  const handleUpdate = (category) => {
    // 4.25 prompt user to update new label and pass in the value
    const newCategory = prompt(
      "Please enter the new label for the selected category.",
      category.label
    );
    // 4.5 update categories list
    if (newCategory) {
      const updatedCategories = [...categories];
      setCategories(
        updatedCategories.map((cat) => {
          if (cat.id === category.id) {
            cat.label = newCategory;
          }
          return cat;
        })
      );

      // 4.75 update local storage
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      toast(`Category renamed to "${category.label}".`);
    }
  };

  // 5. function to delete a category
  const handleDelete = (category) => {
    const confirmDelete = confirm("Are you sure about that?");
    if (confirmDelete) {
      // 5.333 delete category from categories state
      const updatedCategories = categories.filter(
        (item) => item.id !== category.id
      );
      setCategories(updatedCategories);

      // 5.666 update local storage
      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      toast(`Category "${category.label}" has been deleted.`);
    }
  };

  return (
    <Container maxWidth="md" sx={{ p: "30px" }}>
      <Typography variant="h3" sx={{ pb: "20px" }}>
        Manage Categories
      </Typography>
      <Paper elevation={3} sx={{ p: "20px", mt: "20px" }}>
        <Typography variant="h6" sx={{ mb: "10px" }}>
          Add New Category
        </Typography>
        <Box sx={{ display: "flex" }}>
          <TextField
            id="category_name"
            label="Category"
            variant="outlined"
            fullWidth
            value={label}
            onChange={(event) => setLabel(event.target.value)}
          />
          <Button
            color="primary"
            variant="contained"
            sx={{ ml: "10px" }}
            onClick={handleAddNew}
          >
            Add
          </Button>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ mt: "20px", p: "30px" }}>
        <Typography variant="h6" sx={{ mb: "10px" }}>
          Existing Categories ({categories.length})
        </Typography>

        {/*list begin*/}
        <List>
          {categories.map((category) => (
            <ListItem
              key={category.id}
              disableGutters
              divider
              secondaryAction={
                <Box>
                  <IconButton onClick={() => handleUpdate(category)}>
                    <CreateIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(category)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemText primary={`${category.label}`} />
              <hr />
            </ListItem>
          ))}
        </List>
        {/*list end*/}
      </Paper>
    </Container>
  );
}

export default CategoriesPage;
