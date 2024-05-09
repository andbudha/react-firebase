import styles from './UpdateMovieForm.module.css';

type UpdateMovieFormProps = {
  setActiveUpdateMovieForm: (newState: boolean) => void;
};
export const UpdateMovieForm = ({
  setActiveUpdateMovieForm,
}: UpdateMovieFormProps) => {
  const updateMovieHandler = () => {
    setActiveUpdateMovieForm(false);
  };
  return (
    <div className={styles.update_form_main_box}>
      <div className={styles.update_movie_form_box}>
        <input className={styles.movie_title_input} placeholder="Title..." />
        <input
          className={styles.movie_release_year_input}
          placeholder="Release year..."
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
