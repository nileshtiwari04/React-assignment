import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { data } from "autoprefixer";

function App() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");

  const API_KEY = "JIGgH2vzjbtvj16KXiFnZWIZs7xRZpl2nLyV-LTxwyI";

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const imageSearch = async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`
      );
      const data = await response.json();
      setPhotos(data.results);
      console.log(data.results);
  };
  return (
    <>
      <div className="searchbox">
        <h1>Image Generation App</h1>
        <input
          type="text"
          placeholder="Search for an image"
          onChange={handleSearch}
          className="search-input"
        />
        <button className="button" onClick={imageSearch}>
          Search
        </button>
      </div>

      <div className="photo">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.urls.small}  />
        ))}
      </div>
    </>
  );
}

export default App;

