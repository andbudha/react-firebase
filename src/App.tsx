import styles from './App.module.css';
import { Auth } from './components/Auth/Auth';
import { Home } from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
