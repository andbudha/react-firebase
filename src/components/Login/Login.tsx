import styles from './Login.module.css';
import { ChangeEvent, useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { generateErrorMessage } from '../../auth/ErrorHandler/errorhandler';
import { FirebaseError } from 'firebase/app';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassowrd] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const emailSettingFunc = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const passwordSettingFunc = (event: ChangeEvent<HTMLInputElement>) => {
    setPassowrd(event.currentTarget.value);
  };
  const signIn = async () => {
    try {
      if (email === '') {
        alert('Enter your email, please!');
      } else if (password === '') {
        alert('Enter your password, please!');
      } else {
        const loggedIn = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (loggedIn) setLoggedIn(true);
        alert('Successfully logged in!');
        setEmail('');
        setPassowrd('');
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        generateErrorMessage(error);
      } else {
        console.log(error);
      }
    }
  };

  if (loggedIn) {
    return <Navigate to={'/'} />;
  }
  return (
    <div className={styles.main_login_box}>
      <div className={styles.login_box}>
        <input
          value={email}
          placeholder="Email..."
          className={styles.login_input}
          onChange={emailSettingFunc}
        />
        <input
          type="password"
          value={password}
          placeholder="Password..."
          className={styles.login_input}
          onChange={passwordSettingFunc}
        />
        <div className={styles.login_in_btn_box}>
          <button className={styles.login_in_btn} onClick={signIn}>
            LogIn
          </button>
        </div>
        <div className={styles.info_box}>
          <h4>
            Yo do not have an account?
            <span>
              <NavLink to={'/register'} className={styles.register_link}>
                Register
              </NavLink>{' '}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};
