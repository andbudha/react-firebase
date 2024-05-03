import styles from './Auth.module.css';
import { auth, googleProvider } from '../../config/firebase.ts';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { ChangeEvent, useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';

export const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassowrd] = useState<string>('');
  const [isAuthorised, setIsAuthorised] = useState<boolean>(false);

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
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (user) alert('Account created successfully!');
        setIsAuthorised(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEmail('');
      setPassowrd('');
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthorised) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div className={styles.main_auth_box}>
      <div className={styles.auth_box}>
        <input
          value={email}
          placeholder="Email..."
          className={styles.sign_input}
          onChange={emailSettingFunc}
        />
        <input
          type="password"
          value={password}
          placeholder="Password..."
          className={styles.sign_input}
          onChange={passwordSettingFunc}
        />
        <div className={styles.sign_in_btn_box}>
          <button className={styles.sign_in_btn} onClick={signIn}>
            Sign In
          </button>
        </div>
        <div className={styles.btn_box}>
          <button className={styles.sign_in_btn} onClick={signInWithGoogle}>
            Sign In With Google
          </button>
        </div>
        <div className={styles.info_box}>
          <h4>
            Have an account?
            <span>
              <NavLink to={'/login'} className={styles.login_link}>
                LogIn
              </NavLink>{' '}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};
