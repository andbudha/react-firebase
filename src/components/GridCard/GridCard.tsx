import { Movie } from '../../assets/types';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './GridCard.module.css';
type GridCardProps = {
  movies: Movie[] | null;
};
export const GridCard = ({ movies }: GridCardProps) => {
  return (
    <div className={styles.grid_card_main_box}>
      {movies?.map((movie) => {
        return (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
};
