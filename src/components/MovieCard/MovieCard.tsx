import styles from './MovieCard.module.css';
import { Movie } from '../../assets/types';

type MovieCrad = {
  movie: Movie;
};

export const MovieCard = (props: MovieCrad) => {
  return (
    <div className={styles.card_box}>
      <div className={styles.card_info_box}>
        <h3 className={styles.header}>
          Title:{' '}
          <span className={styles.detailed_text}>{props.movie.title}</span>
        </h3>
        <h3 className={styles.header}>
          Release-year:{' '}
          <span className={styles.detailed_text}>
            {props.movie.releaseYear}
          </span>
        </h3>
        <h3 className={styles.header}>
          Received Oscar:{' '}
          <span className={styles.detailed_text}>
            {props.movie.oscar ? <span>Yes</span> : <span>No</span>}
          </span>
        </h3>
      </div>
      <div className={styles.btn_box}>
        <button className={styles.remove_btn}>delete</button>
      </div>
    </div>
  );
};
