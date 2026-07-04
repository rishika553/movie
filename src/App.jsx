import './css/App.css';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import {Routes, Route} from "react-router-dom";
import { MovieProvider} from "./context/MovieContext";
import NavBar  from "./components/NavBar";

function App() {
  return (
    <>
    <MovieProvider>
    <div>
      <NavBar />

    <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
      </div>
      </MovieProvider>
      </>
       );
       
}


export default App;
