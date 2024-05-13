import { Movie } from '../../assets/types';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './GridCard.module.css';
type GridCardProps = {
  movies: Movie[] | null;
  getData: () => void;
  setActiveUpdateMovieForm: (newState: boolean) => void;
  setMovieToUpdate: (movieToUpdate: Movie) => void;
};
export const GridCard = ({
  movies,
  getData,
  setActiveUpdateMovieForm,
  setMovieToUpdate,
}: GridCardProps) => {
  const movieList = movies?.map((movie) => {
    return (
      <div key={movie.id}>
        <MovieCard
          movie={movie}
          getData={getData}
          setActiveUpdateMovieForm={setActiveUpdateMovieForm}
          setMovieToUpdate={setMovieToUpdate}
        />
      </div>
    );
  });
  return (
    <div className={styles.grid_card_main_box}>
      {movies?.length ? (
        movieList
      ) : (
        <h1 className={styles.notification_text}>No movies found!</h1>
      )}
    </div>
  );
};
