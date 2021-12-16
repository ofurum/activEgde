import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Artists from "./pages/artists/artist"
import Albums from "./pages/album/albums";
import AlbumPhotos from "./pages/albumPhoto/albumPhotos";
import ArtistTweets from "./pages/artistTweets/tweets"
function App() {
  return (
   <Router>
        <Routes>
          <Route  exact path="/"  element={<Artists/>} />
          <Route path="/artists/:id/albums" exact element={<Albums/>} />
          <Route eaxct path="/artists/:id/albums/:albumId/photos"  element = {<AlbumPhotos/>} />
          <Route eaxct path="/artists/:id/tweets"  element = {<ArtistTweets/>} />
        </Routes>
   </Router>
    
  );
}

export default App;
