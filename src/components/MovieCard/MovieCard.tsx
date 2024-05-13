import styles from './MovieCard.module.css';
import { Movie } from '../../assets/types';
import { deleteDoc, doc } from 'firebase/firestore';
import { dataBase } from '../../config/firebase';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/auth_context';
import { useLocation } from 'react-router-dom';

type MovieCradProps = {
  movie: Movie;
  getData: () => void;
  setActiveUpdateMovieForm: (newState: boolean) => void;
  setMovieToUpdate: (movieToUpdate: Movie) => void;
};

export const MovieCard = (props: MovieCradProps) => {
  const { loggedInUserID } = useContext(LoginContext);
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
    console.log('ok', movieToUpdate.id);
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
      {useLocation().pathname === '/mymovies' &&
        loggedInUserID === props.movie.userID && (
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
