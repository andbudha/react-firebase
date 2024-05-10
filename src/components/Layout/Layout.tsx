import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout_main_box}>
      <div>
        <Navbar />
      </div>
      <div className={styles.layout_box}>
        <Outlet />
      </div>
    </div>
  );
};
