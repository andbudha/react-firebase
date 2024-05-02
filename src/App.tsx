import styles from './App.module.css';
import { Auth } from './components/Auth/Auth';
import { Home } from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
