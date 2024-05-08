import styles from './MovieCard.module.css';
import { Movie } from '../../assets/types';
import { deleteDoc, doc } from 'firebase/firestore';
import { dataBase } from '../../config/firebase';

type MovieCrad = {
  movie: Movie;
  getData: () => void;
};

export const MovieCard = (props: MovieCrad) => {
  const deleteMovieHandler = async (movieID: string) => {
    const docToRemove = doc(dataBase, 'movies', movieID);
    try {
      await deleteDoc(docToRemove);
      props.getData();
      alert('Movie successfully removed!');
    } catch (error) {
      console.log(error);
    }
  };
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
        <button
          className={styles.remove_btn}
          onClick={() => deleteMovieHandler(props.movie.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};
