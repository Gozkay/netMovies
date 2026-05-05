import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <MovieRow title="Popular Series" />
      <MovieRow title="Trending Now" />
    </div>
  );
}

export default Home;