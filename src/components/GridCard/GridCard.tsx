import { Movie } from '../../assets/types';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './GridCard.module.css';
type GridCardProps = {
  movies: Movie[] | null;
  getData: () => void;
  loggedInUserID: string | undefined;
  setActiveUpdateMovieForm: (newState: boolean) => void;
  setMovieToUpdate: (movieToUpdate: Movie) => void;
};
export const GridCard = ({
  movies,
  getData,
  loggedInUserID,
  setActiveUpdateMovieForm,
  setMovieToUpdate,
}: GridCardProps) => {
  return (
    <div className={styles.grid_card_main_box}>
      {movies?.map((movie) => {
        return (
          <div key={movie.id}>
            <MovieCard
              movie={movie}
              getData={getData}
              loggedInUserID={loggedInUserID}
              setActiveUpdateMovieForm={setActiveUpdateMovieForm}
              setMovieToUpdate={setMovieToUpdate}
            />
          </div>
        );
      })}
    </div>
  );
};
