import { useContext } from 'react';
import { Movie, Movies } from '../../assets/types';
import { LoginContext } from '../../contexts/auth_context';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MyMovies.module.css';

type MyMoviesProps = {
  movies: Movies | null;
  getData: () => void;
  setActiveUpdateMovieForm: (newState: boolean) => void;
  setMovieToUpdate: (movieToUpdate: Movie) => void;
};
export const MyMovies = ({
  movies,
  getData,
  setActiveUpdateMovieForm,
  setMovieToUpdate,
}: MyMoviesProps) => {
  const { loggedInUserID } = useContext(LoginContext);
  console.log(loggedInUserID);

  const filteredMovies = movies?.filter(
    (movie) => movie.userID === loggedInUserID
  );
  const filteredMovieList = filteredMovies?.map((movie) => {
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
    <div className={styles.my_movies_main_box}>
      {filteredMovieList?.length ? (
        filteredMovieList
      ) : (
        <h1 className={styles.notification_text}>No movies found!</h1>
      )}
    </div>
  );
};
