import styles from './App.module.css';
import { Auth } from './components/Auth/Auth';

function App() {
  return (
    <div className={styles.main}>
      <Auth />
    </div>
  );
}

export default App;
