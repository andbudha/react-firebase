import { ChangeEvent, useContext, useState } from 'react';
import styles from './Movieform.module.css';
import { addDoc, collection } from 'firebase/firestore';
import { dataBase } from '../../config/firebase';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { LoginContext } from '../../contexts/auth_context';

type MovieFormProps = {
  getData: () => void;
  setIsLoading: (newLoadingStatus: boolean) => void;
};
export const MovieForm = ({ getData, setIsLoading }: MovieFormProps) => {
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputReleaseYear, setInputReleaseYear] = useState<string>('');
  const [answer, setAnswer] = useState<boolean>(false);
  const [toggleMovieBtn, setToggleMovieBtn] = useState<boolean>(false);
  const movieCollection = collection(dataBase, 'movies');

  const { loggedInUserID } = useContext(LoginContext);

  const toggleMovieBtnHandler = () => {
    setToggleMovieBtn(!toggleMovieBtn);
  };
  const newMovie = {
    userID: loggedInUserID,
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
    setIsLoading(true);
    if (inputTitle && inputReleaseYear) {
      try {
        const response = await addDoc(movieCollection, newMovie);
        if (response) {
          setToggleMovieBtn(!toggleMovieBtn);
          getData();
          setInputTitle('');
          setInputReleaseYear('');
          setAnswer(false);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Fill in all the fields, please!');
    }
  };
  return (
    <div className={styles.movie_form_main_box}>
      <div
        className={styles.toggle_movie_form_btn}
        onClick={toggleMovieBtnHandler}
      >
        <h4>Add Movie</h4>
        {toggleMovieBtn ? (
          <FaChevronUp className={styles.chevron_up} />
        ) : (
          <FaChevronDown className={styles.chevron_down} />
        )}
      </div>
      {!!toggleMovieBtn && (
        <div className={styles.movie_form_box}>
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
      )}
    </div>
  );
};
