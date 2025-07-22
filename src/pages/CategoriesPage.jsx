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
            id="note_name"
            label="Title"
            variant="outlined"
            fullWidth
          />
          <Button color="primary" variant="contained" sx={{ ml: "10px" }}>
            Add
          </Button>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ mt: "20px", p: "30px" }}>
        <Typography variant="h6" sx={{ mb: "10px" }}>
          Existing Categories (3)
        </Typography>

        {/*list begin*/}
        <List fullWidth sx={{ bgcolor: "background.paper" }}>
          {["Personal", "Work", "Ideas"].map((value) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <>
                  <IconButton>
                    <CreateIcon />
                  </IconButton>
                  <IconButton color="">
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary={`${value}`} />
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
