import styles from './App.module.css';
import { Auth } from './components/Auth/Auth';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className={styles.main}>
      {/* <Auth /> */}
      <Home />
    </div>
  );
}

export default App;
