import styles from './MovieCard.module.css';
import { Movie } from '../../assets/types';

type MovieCrad = {
  movie: Movie;
};

export const MovieCard = (props: MovieCrad) => {
  return (
    <div className={styles.card_box}>
      <div className={styles.card_info_box}>
        <h2>Title: {props.movie.title}</h2>
        <h2>Release-year: {props.movie.releaseYear}</h2>
        <h2>
          Received Oscar:{' '}
          {props.movie.oscar ? <span>Yes</span> : <span>No</span>}
        </h2>
      </div>
    </div>
  );
};
