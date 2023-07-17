import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home";
import BookScreen from "./screens/Book";

function App() {
  return (
    <Routes>
      <Route excat path="/" element={<HomeScreen />} />
      <Route path="/book/:tripId" element={<BookScreen />} />
    </Routes>
  );
}

export default App;
