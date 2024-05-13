import styles from './Home.module.css';
import { Movie, Movies } from '../../assets/types';
import { GridCard } from '../GridCard/GridCard';
import { UpdateMovieForm } from '../UpdateMovieForm/UpdateMovieForm';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import FakeProgressBar from '../ProgressBar/FakeProgressBar';

type HomeProps = {
  movies: Movies | null;
  isLoading: boolean;
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
      <GridCard
        movies={movies}
        getData={getData}
        setActiveUpdateMovieForm={setActiveUpdateMovieForm}
        setMovieToUpdate={setMovieToUpdate}
      />
    </div>
  );
};
