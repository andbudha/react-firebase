import { ChangeEvent, useState } from 'react';
import styles from './Movieform.module.css';
import { addDoc, collection } from 'firebase/firestore';
import { dataBase } from '../../config/firebase';

type MovieFormProps = {
  getData: () => void;
};
export const MovieForm = ({ getData }: MovieFormProps) => {
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputReleaseYear, setInputReleaseYear] = useState<string>('');
  const [answer, setAnswer] = useState<boolean>(false);
  const movieCollection = collection(dataBase, 'movies');

  const newMovie = {
    oscar: answer,
    releaseYear: Number(inputReleaseYear),
    title: inputTitle,
  };
  const getTitleInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.currentTarget.value);
  };

  const getReleaseYearInputValueHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputReleaseYear(e.currentTarget.value);
  };

  const addNewMovieHandler = async () => {
    if (inputTitle && inputReleaseYear) {
      try {
        const response = await addDoc(movieCollection, newMovie);
        if (response) {
          getData();
          alert('Movie added successfully');
          setInputTitle('');
          setInputReleaseYear('');
          setAnswer(false);
          console.log(newMovie);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Fill in all the fields, please!');
    }
  };
  return (
    <div className={styles.movie_form_main_box}>
      <input
        value={inputTitle}
        className={styles.movie_title_input}
        placeholder="Title..."
        onChange={getTitleInputValueHandler}
      />
      <input
        value={inputReleaseYear}
        className={styles.movie_release_year_input}
        placeholder="Release year..."
        onChange={getReleaseYearInputValueHandler}
      />
      <div className={styles.radio_btn_box}>
        <h4>Received Oscar: </h4>
        <div className={styles.answer_box}>
          <div className={styles.answer}>
            {' '}
            <input
              className={styles.yes_answer_radio_btn}
              type="radio"
              name="oscar"
              id="yes"
              value="yes"
              checked={answer === true}
              onChange={() => setAnswer(true)}
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className={styles.answer}>
            <input
              className={styles.no_answer_radio_btn}
              type="radio"
              name="oscar"
              id="no"
              value="no"
              checked={answer === false}
              onChange={() => setAnswer(false)}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </div>
      <button className={styles.add_movie_btn} onClick={addNewMovieHandler}>
        Add Movie
      </button>
    </div>
  );
};
