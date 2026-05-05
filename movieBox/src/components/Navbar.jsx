import { FaSearch } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
function Navbar() {
  return (
    <div className="navbar">
       <div className="search"> 
             <FaSearch />
             <input placeholder="Search movies/TV shows" />
       </div>
      <button  className="download"> <FaFilm /> Download App</button>
    </div>
  );
}

export default Navbar;