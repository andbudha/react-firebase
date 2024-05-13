import { useContext } from 'react';
import { Movie, Movies } from '../../assets/types';
import { LoginContext } from '../../contexts/auth_context';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MyMovies.module.css';
import { UpdateMovieForm } from '../UpdateMovieForm/UpdateMovieForm';
import FakeProgressBar from '../ProgressBar/FakeProgressBar';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { MovieForm } from '../MovieForm/MovieForm';

type MyMoviesProps = {
  movies: Movies | null;
  getData: () => void;
  isLoading: boolean;
  movieToUpdate: Movie | null;
  activeUpdateMovieForm: boolean;
  setIsLoading: (newLoadingStatus: boolean) => void;
  setActiveUpdateMovieForm: (newState: boolean) => void;
  setMovieToUpdate: (movieToUpdate: Movie) => void;
};
export const MyMovies = ({
  movies,
  getData,
  movieToUpdate,
  isLoading,
  setIsLoading,
  activeUpdateMovieForm,
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
    <>
      {isLoading ? <ProgressBar /> : <FakeProgressBar />}
      <MovieForm getData={getData} setIsLoading={setIsLoading} />
      <div className={styles.my_movies_main_box}>
        {!!activeUpdateMovieForm && (
          <UpdateMovieForm
            setActiveUpdateMovieForm={setActiveUpdateMovieForm}
            movieToUpdate={movieToUpdate}
            setIsLoading={setIsLoading}
            getData={getData}
          />
        )}

        {filteredMovieList?.length ? (
          filteredMovieList
        ) : (
          <h1 className={styles.notification_text}>No movies found!</h1>
        )}
      </div>
    </>
  );
};
