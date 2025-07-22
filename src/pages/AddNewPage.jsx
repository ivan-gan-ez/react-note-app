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

function AddNewPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  function onChange(e) {
    setContent(e.target.value);
  }

  return (
    <Container maxWidth="md" sx={{ p: "30px" }}>
      <Typography variant="h3">Add New Note</Typography>
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
            <MenuItem value={1}>Alkali Metal</MenuItem>
            <MenuItem value={2}>Alkaline Earth Metal</MenuItem>
            <MenuItem value={3}>Transition Metal</MenuItem>
            <MenuItem value={4}>Lanthanide</MenuItem>
            <MenuItem value={5}>Actinide</MenuItem>
            <MenuItem value={6}>Post-Transition Metal</MenuItem>
            <MenuItem value={7}>Metalloid</MenuItem>
            <MenuItem value={8}>Non-Metal</MenuItem>
            <MenuItem value={9}>Halogen</MenuItem>
            <MenuItem value={10}>Noble Gas</MenuItem>
            <MenuItem value={0}>Unknown</MenuItem>
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
          <Button color="primary" variant="contained">
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
