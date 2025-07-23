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
  return (
    <>
      <Container maxWidth="md" sx={{ p: "30px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3" sx={{ pb: 4 }}>
            All Notes (3)
          </Typography>

          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ minWidth: "120px", ml: "20px" }}>
              <InputLabel id="category_label">Category</InputLabel>
              <Select labelId="category_label" id="category" label="Category">
                <MenuItem value={"all"}>All Categories</MenuItem>
                <MenuItem value={"personal"}>Personal</MenuItem>
                <MenuItem value={"work"}>Work</MenuItem>
                <MenuItem value={"ideas"}>Ideas</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: "120px", ml: "20px" }}>
              <InputLabel id="sort_label">Sort By</InputLabel>
              <Select labelId="sort_label" id="sort" label="Sort By">
                <MenuItem value={"latest"}>Last Updated</MenuItem>
                <MenuItem value={"title"}>Title</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box sx={{ display: "inline" }}>
          <Grid container spacing={2}>
            {/* card 1 */}
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Which theme should we pick?
                  </Typography>
                  <Chip label="Ideas" sx={{ mb: "10px" }} />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {new Date().toISOString()}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="primary">
                    <CreateIcon sx={{ pr: "10px" }}></CreateIcon>Edit
                  </Button>
                  <Button color="error">
                    <DeleteIcon sx={{ pr: "10px" }}></DeleteIcon>Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* card 1 end*/}

            {/* card 2 */}
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Project making week
                  </Typography>
                  <Chip label="Personal" sx={{ mb: "10px" }} />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {new Date().toISOString()}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="primary">
                    <CreateIcon sx={{ pr: "10px" }}></CreateIcon>Edit
                  </Button>
                  <Button color="error">
                    <DeleteIcon sx={{ pr: "10px" }}></DeleteIcon>Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* card 2 end*/}

            {/* card 3 */}
            <Grid size={{ xs: 12, md: 6, lg: 4 }}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Assignment Sheets
                  </Typography>
                  <Chip label="Work" sx={{ mb: "10px" }} />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {new Date().toISOString()}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="primary">
                    <CreateIcon sx={{ pr: "10px" }}></CreateIcon>Edit
                  </Button>
                  <Button color="error">
                    <DeleteIcon sx={{ pr: "10px" }}></DeleteIcon>Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* card 3 end*/}
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
