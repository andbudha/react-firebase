import styles from './Auth.module.css';

export const Auth = () => {
  return (
    <div className={styles.main_auth_box}>
      <div className={styles.auth_box}>
        <input placeholder="Email..." className={styles.login_input} />
        <input placeholder="Password..." className={styles.login_input} />
        <div className={styles.btn_box}>
          <button className={styles.login_btn}>Login</button>
        </div>
      </div>
    </div>
  );
};
