import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SearchBar" element={<SearchBar />} />
        <Route path="Details/:tripSlug" element={<TripDetail />} />
        <Route path="TripList" element={<TripsList />} />
      </Routes>
    </div>
  );
}

export default App;
