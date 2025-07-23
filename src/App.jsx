import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppBar from "./components/Appbar";
import { Toaster } from "sonner";

// import all the pages
import HomePage from "./pages/HomePage";
import AddNewPage from "./pages/AddNewPage";
import CategoriesPage from "./pages/CategoriesPage";
import EditPage from "./pages/EditPage";

/*
  Routes:
  All notes => /
  Add note => /add
  Categories => /categories
*/

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddNewPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/n/:id" element={<EditPage />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
