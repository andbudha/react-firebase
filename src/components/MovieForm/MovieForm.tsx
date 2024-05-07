import styles from './Movieform.module.css';
export const MovieForm = () => {
  return (
    <div className={styles.movie_form_main_box}>
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
              className={styles.yes_answer_radio_btn}
              type="radio"
              name="oscar"
              id="yes"
              value="yes"
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
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </div>
      <button className={styles.add_movie_btn}>Add Movie</button>
    </div>
  );
};
