import styles from './App.module.css';
import { Auth } from './components/Auth/Auth';
import { Home } from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { MyMovies } from './components/MyMovies/MyMovies';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mymovies" element={<MyMovies />} />
        </Route>
        <Route path="register" element={<Auth />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
