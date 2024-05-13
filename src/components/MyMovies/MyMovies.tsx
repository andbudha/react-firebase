import { Movie, Movies } from '../../assets/types';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MyMovies.module.css';

type MyMoviesProps = {
  movies: Movies | null;
  loggedInUserID: undefined | string;
  getData: () => void;
  setActiveUpdateMovieForm: (newState: boolean) => void;
  setMovieToUpdate: (movieToUpdate: Movie) => void;
};
export const MyMovies = ({
  movies,
  loggedInUserID,
  getData,
  setActiveUpdateMovieForm,
  setMovieToUpdate,
}: MyMoviesProps) => {
  const filteredMovies = movies?.filter(
    (movie) => movie.userID === loggedInUserID
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
