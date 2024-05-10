import { Movie, Movies } from '../../assets/types';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MyMovies.module.css';

type MyMoviesProps = {
  movies: Movies | null;
  currentUserID: undefined | string;
  getData: () => void;
  setActiveUpdateMovieForm: (newState: boolean) => void;
  setMovieToUpdate: (movieToUpdate: Movie) => void;
};
export const MyMovies = ({
  movies,
  currentUserID,
  getData,
  setActiveUpdateMovieForm,
  setMovieToUpdate,
}: MyMoviesProps) => {
  const filteredMovies = movies?.filter(
    (movie) => movie.userID === currentUserID
  );
  console.log(filteredMovies);

  return (
    <div className={styles.my_movies_main_box}>
      {filteredMovies?.map((movie) => {
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
      })}
    </div>
  );
};
