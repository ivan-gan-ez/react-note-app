import { useState } from "react";
import { toast } from "sonner";
import { Link as RouterLink } from "react-router";

import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Box,
  Grid,
  Chip,
  Button,
  Fab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

function HomePage() {
  const categoriesInLocalStorage = localStorage.getItem("categories");
  const [categories, setCategories] = useState(
    categoriesInLocalStorage ? JSON.parse(categoriesInLocalStorage) : []
  );

  const notesInLocalStorage = localStorage.getItem("notes");
  const [notes, setNotes] = useState(
    notesInLocalStorage ? JSON.parse(notesInLocalStorage) : []
  );

  const handleNoteDelete = (note) => {
    const confirmDelete = confirm("Are you sure about that?");
    if (confirmDelete) {
      const updatedNotes = notes.filter((item) => item.id !== note.id);
      setNotes(updatedNotes);

      // 5.666 update local storage
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      toast(`Note "${note.title}" has been deleted.`);
    }
  };

  const getCategoryLabel = (note) => {
    const selectedCategory = categories.find((cat) => cat.id === note.category);
    if (selectedCategory) {
      return selectedCategory.label;
    } else {
      return "No Category";
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("updated");

  return (
    <>
      <Container maxWidth="md" sx={{ p: "30px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3" sx={{ pb: 4 }}>
            All Notes ({notes.length})
          </Typography>

          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ minWidth: "120px", ml: "20px" }}>
              <InputLabel id="category_label">Category</InputLabel>
              <Select
                labelId="category_label"
                id="category"
                label="Category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                <MenuItem value={"all"}>All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem value={category.id}>{category.label}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: "120px", ml: "20px" }}>
              <InputLabel id="sort_label">Sort By</InputLabel>
              <Select
                labelId="sort_label"
                id="sort"
                label="Sort By"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <MenuItem value={"updated"}>Last Updated</MenuItem>
                <MenuItem value={"title"}>Title</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box sx={{ display: "inline" }}>
          <Grid container spacing={2}>
            {notes
              .filter((n) => {
                if (selectedCategory === "all") {
                  return true;
                } else if (n.category === selectedCategory) {
                  return true;
                } else {
                  return false;
                }
              })
              .sort((a, b) => {
                if (sortBy === "updated") {
                  return b.updatedAt - a.updatedAt;
                } else {
                  return a.title.localeCompare(b.title);
                }
              })
              .map((note) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={note.id}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {note.title}
                      </Typography>
                      <Chip
                        label={getCategoryLabel(note)}
                        sx={{ mb: "10px" }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {new Date(note.updatedAt).toLocaleString()}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        color="primary"
                        component={RouterLink}
                        to={`/n/${note.id}`}
                      >
                        <CreateIcon sx={{ pr: "10px" }}></CreateIcon>Edit
                      </Button>
                      <Button
                        color="error"
                        onClick={() => handleNoteDelete(note)}
                      >
                        <DeleteIcon sx={{ pr: "10px" }}></DeleteIcon>Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
      <Fab color="primary" sx={{ position: "absolute", bottom: 16, right: 16 }}>
        <AddIcon />
      </Fab>
    </>
  );
}

export default HomePage;
