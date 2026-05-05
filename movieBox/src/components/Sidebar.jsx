import {
  FaHome,
  FaTv,
  FaFilm,
  FaRegLaughBeam,
  FaFire,
  FaMobile,
  FaDownload,
  FaGamepad,
  FaHistory,
  FaGlobe
} from 'react-icons/fa';
function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Movie<span>Box</span></h2>
      <p><FaGlobe /> ENGLISH</p>

      <ul className="nav-links">
        <li className="home-btn"><FaHome /> <span>Home</span></li>
        <li><FaTv /> <span>TV Shows</span></li>
        <li><FaFilm /> <span>Movies</span></li>
        <li><FaRegLaughBeam /> <span>Animation</span></li>
        <li><FaFire /> <span>Most Watched</span></li>
        <li><FaMobile /> <span>Movie App</span></li>
        <li><FaDownload /> <span>FM Download</span></li>
        <li><FaGamepad /> <span>Games</span></li>
        <li><FaHistory /> <span>Old Moviebox</span></li>
      </ul>

      <button className="download-btn">Download App</button>
    </div>
  );

}

export default Sidebar;