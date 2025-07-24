import {
  Container,
  Paper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from "@mui/material";

import Editor from "react-simple-wysiwyg";
import { useState } from "react";
import { Link as RouterLink } from "react-router";
import { useNavigate, useParams } from "react-router";
import { nanoid } from "nanoid";
import { toast } from "sonner";

function AddNewPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const categoriesInLocalStorage = localStorage.getItem("categories");
  const [categories, setCategories] = useState(
    categoriesInLocalStorage ? JSON.parse(categoriesInLocalStorage) : []
  );

  const notesInLocalStorage = localStorage.getItem("notes");
  const [notes, setNotes] = useState(
    notesInLocalStorage ? JSON.parse(notesInLocalStorage) : []
  );

  const selectedNote = notes.find((n) => n.id === id);
  const [title, setTitle] = useState(selectedNote ? selectedNote.title : "");
  const [category, setCategory] = useState(
    selectedNote ? selectedNote.category : ""
  );
  const [content, setContent] = useState(
    selectedNote ? selectedNote.content : ""
  );

  const handleUpdate = () => {
    if (title === "" || category === "" || content === "") {
      toast("One or more fields are empty.");
    } else {
      const updatedNotes = [...notes];
      setNotes(
        updatedNotes.map((note) => {
          if (note.id === selectedNote.id) {
            note.title = title;
            note.category = category;
            note.content = content;
          }
          return note;
        })
      );

      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setTitle("");
      setCategory("");
      setContent("");
      toast(`Note "${title}" successfully updated!`);
      navigate("/");
    }
  };

  if (!selectedNote) {
    return (
      <Typography variant="h4" sx={{ textAlign: "center", pt: 5 }}>
        Note not found.
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" sx={{ p: "30px" }}>
      <Typography variant="h3">Edit Note</Typography>
      <Paper elevation={3} sx={{ p: "20px", mt: "20px" }}>
        <TextField
          id="note_name"
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <FormControl fullWidth sx={{ mt: "20px" }}>
          <InputLabel id="note_category_label">Category</InputLabel>
          <Select
            labelId="note_category_label"
            id="note_category"
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((category) => (
              <MenuItem value={category.id}>{category.label}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ mt: "20px" }}>
          <Typography variant="body1" sx={{ mb: "10px" }}>
            Content
          </Typography>
          <Editor
            containerProps={{ style: { height: "250px" } }}
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            mt: "20px",
          }}
        >
          <Button color="primary" variant="contained" onClick={handleUpdate}>
            Save Note
          </Button>
          <Button
            component={RouterLink}
            to="/"
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default AddNewPage;
