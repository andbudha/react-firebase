import styles from './Home.module.css';
import { Movie, Movies } from '../../assets/types';
import { GridCard } from '../GridCard/GridCard';
import { MovieForm } from '../MovieForm/MovieForm';
import { UpdateMovieForm } from '../UpdateMovieForm/UpdateMovieForm';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import FakeProgressBar from '../ProgressBar/FakeProgressBar';

type HomeProps = {
  movies: Movies | null;
  isLoading: boolean;
  loggedInUserID: undefined | string;
  activeUpdateMovieForm: boolean;
  getData: () => void;
  setIsLoading: (newLoadingStatus: boolean) => void;
  setActiveUpdateMovieForm: (newState: boolean) => void;
  movieToUpdate: Movie | null;
  setMovieToUpdate: (movieToUpdate: Movie) => void;
};
export const Home = ({
  movies,
  isLoading,
  loggedInUserID,
  getData,
  setIsLoading,
  activeUpdateMovieForm,
  setActiveUpdateMovieForm,
  movieToUpdate,
  setMovieToUpdate,
}: HomeProps) => {
  return (
    <div className={styles.main_home_page}>
      {isLoading ? <ProgressBar /> : <FakeProgressBar />}
      {!!activeUpdateMovieForm && (
        <UpdateMovieForm
          setActiveUpdateMovieForm={setActiveUpdateMovieForm}
          movieToUpdate={movieToUpdate}
          setIsLoading={setIsLoading}
          getData={getData}
        />
      )}
      <MovieForm
        getData={getData}
        setIsLoading={setIsLoading}
        loggedInUserID={loggedInUserID}
      />
      <GridCard
        movies={movies}
        getData={getData}
        loggedInUserID={loggedInUserID}
        setActiveUpdateMovieForm={setActiveUpdateMovieForm}
        setMovieToUpdate={setMovieToUpdate}
      />
    </div>
  );
};
