import styles from './MovieCard.module.css';
import { Movie } from '../../assets/types';
import { deleteDoc, doc } from 'firebase/firestore';
import { dataBase } from '../../config/firebase';

type MovieCradProps = {
  movie: Movie;
  getData: () => void;
  loggedInUserID: string | undefined;
  setActiveUpdateMovieForm: (newState: boolean) => void;
  setMovieToUpdate: (movieToUpdate: Movie) => void;
};

export const MovieCard = (props: MovieCradProps) => {
  const deleteMovieHandler = async (movieID: string) => {
    const docToRemove = doc(dataBase, 'movies', movieID);
    try {
      await deleteDoc(docToRemove);
      props.getData();
    } catch (error) {
      console.log(error);
    }
  };

  const updateMovieHandler = (movieToUpdate: Movie) => {
    props.setActiveUpdateMovieForm(true);
    props.setMovieToUpdate(movieToUpdate);
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
      {props.loggedInUserID === props.movie.userID && (
        <div className={styles.btn_box}>
          <button
            className={styles.remove_btn}
            onClick={() => deleteMovieHandler(props.movie.id)}
          >
            delete
          </button>
          <button
            className={styles.update_movie_btn}
            onClick={() => updateMovieHandler(props.movie)}
          >
            update
          </button>
        </div>
      )}
    </div>
  );
};
