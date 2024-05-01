import styles from './Auth.module.css';
import { auth } from '../../config/firebase.ts';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ChangeEvent, useState } from 'react';

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  if (auth.currentUser?.email) {
    console.log(auth.currentUser?.email);
  } else {
    console.log('You must first log in!');
  }

  const emailSettingFunc = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const passwordSettingFunc = (event: ChangeEvent<HTMLInputElement>) => {
    setPassowrd(event.currentTarget.value);
  };
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setEmail('');
      setPassowrd('');
    }
  };
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
        <div className={styles.btn_box}>
          <button className={styles.sign_in_btn} onClick={signIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
