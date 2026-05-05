import MovieCard from "./MovieCard";

function MovieRow({ title }) {
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row-cards">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default MovieRow;