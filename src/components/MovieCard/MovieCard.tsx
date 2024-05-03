import styles from './MovieCard.module.css';
import { Movie } from '../../assets/types';

type MovieCrad = {
  movie: Movie;
};

export const MovieCard = (props: MovieCrad) => {
  return (
    <div className={styles.card_box}>
      <h1>Title: {props.movie.title}</h1>
    </div>
  );
};
