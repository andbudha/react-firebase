import { ChangeEvent, useState } from 'react';
import { Movie } from '../../assets/types';
import styles from './UpdateMovieForm.module.css';
import { doc, updateDoc } from 'firebase/firestore';
import { dataBase } from '../../config/firebase';
import { IoClose } from 'react-icons/io5';

type UpdateMovieFormProps = {
  setActiveUpdateMovieForm: (newState: boolean) => void;
  movieToUpdate: Movie | null;
  getData: () => void;
  setIsLoading: (newLoadingStatus: boolean) => void;
};
export const UpdateMovieForm = ({
  setActiveUpdateMovieForm,
  movieToUpdate,
  setIsLoading,
  getData,
}: UpdateMovieFormProps) => {
  const [updatedTitle, setUpdatedTitle] = useState(movieToUpdate?.title);
  const [updatedReleaseYear, setUpdatedReleaseYear] = useState(
    String(movieToUpdate?.releaseYear)
  );
  const [updatedAnswer, setUpdatedAnswer] = useState<boolean>(
    movieToUpdate ? movieToUpdate.oscar : false
  );

  let movieID: string;
  if (movieToUpdate?.id) {
    movieID = movieToUpdate.id;
  }

  const closeUpdateMovieFormHandler = () => {
    setActiveUpdateMovieForm(false);
  };
  const updatedMovie = {
    title: updatedTitle,
    releaseYear: Number(updatedReleaseYear),
    oscar: updatedAnswer,
  };

  const updateTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(e.currentTarget.value);
  };

  const updateReleaseYearHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedReleaseYear(e.currentTarget.value);
  };

  const updateOscarStatusHandler = (newOscarStatus: boolean) => {
    setUpdatedAnswer(newOscarStatus);
  };
  const updateMovieHandler = async () => {
    setIsLoading(true);
    const docToUpdate = doc(dataBase, 'movies', movieID);
    try {
      await updateDoc(docToUpdate, updatedMovie);
      setIsLoading(false);
      getData();
      setActiveUpdateMovieForm(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.update_form_main_box}>
      <div className={styles.update_movie_form_box}>
        <div className={styles.close_form_btn_box}>
          <IoClose
            className={styles.close_btn}
            onClick={closeUpdateMovieFormHandler}
          />
        </div>
        <input
          value={updatedTitle}
          className={styles.movie_title_input}
          placeholder="New title..."
          onChange={updateTitleHandler}
        />
        <input
          value={updatedReleaseYear}
          className={styles.movie_release_year_input}
          placeholder="Release year..."
          onChange={updateReleaseYearHandler}
        />
        <div className={styles.radio_btn_box}>
          <h4>Received Oscar: </h4>
          <div className={styles.answer_box}>
            <div className={styles.answer}>
              {' '}
              <input
                className={styles.yes_radio_btn}
                type="radio"
                name="received_oscar"
                id="yes"
                value="yes"
                checked={updatedAnswer === true}
                onChange={() => updateOscarStatusHandler(true)}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className={styles.answer}>
              <input
                className={styles.no_radio_btn}
                type="radio"
                name="received_oscar"
                id="no"
                value="no"
                checked={updatedAnswer === false}
                onChange={() => updateOscarStatusHandler(false)}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        <button
          className={styles.update_movie_btn}
          onClick={updateMovieHandler}
        >
          Update Movie
        </button>
      </div>
    </div>
  );
};
