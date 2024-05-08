import { ChangeEvent, useState } from 'react';
import styles from './Movieform.module.css';
export const MovieForm = () => {
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputReleaseYear, setInputReleaseYear] = useState<string>('');
  const [answer, setAnswer] = useState<boolean>();

  console.log(answer);

  const getTitleInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.currentTarget.value);
  };

  const getReleaseYearInputValueHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputReleaseYear(e.currentTarget.value);
  };

  const addNewMovieHandler = () => {
    const newMovie = {
      oscar: answer,
      releaseYear: Number(inputReleaseYear),
      title: inputTitle,
    };
    console.log(newMovie);
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
