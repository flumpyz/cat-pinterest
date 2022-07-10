import './App.css';
import {Route, Routes} from "react-router";
import GalleryPage from "./Components/GalleryPage";
import FavoritesPage from "./Components/FavoritesPage";
import './reset.css';

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<GalleryPage/>}/>
                <Route exact path="/favorite-cats" element={<FavoritesPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
