import styles from './App.module.css';
import { Auth } from './components/Auth/Auth';
import { Home } from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { MyMovies } from './components/MyMovies/MyMovies';
import { Layout } from './components/Layout/Layout';
import { Movie, Movies } from './assets/types';
import { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { auth, dataBase } from './config/firebase';
import { LoginContext } from './contexts/auth_context';

function App() {
  const [movies, setMovies] = useState<null | Movies>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeUpdateMovieForm, setActiveUpdateMovieForm] = useState(false);
  const [movieToUpdate, setMovieToUpdate] = useState<null | Movie>(null);
  const { setLoggedInUserID } = useContext(LoginContext);

  const movieCollection = collection(dataBase, 'movies');
  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getDocs(movieCollection);
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (data) {
        setMovies(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setLoggedInUserID(auth.currentUser?.uid);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                movies={movies}
                isLoading={isLoading}
                getData={getData}
                setIsLoading={setIsLoading}
                activeUpdateMovieForm={activeUpdateMovieForm}
                setActiveUpdateMovieForm={setActiveUpdateMovieForm}
                movieToUpdate={movieToUpdate}
                setMovieToUpdate={setMovieToUpdate}
              />
            }
          />
          <Route
            path="mymovies"
            element={
              <MyMovies
                movies={movies}
                getData={getData}
                setActiveUpdateMovieForm={setActiveUpdateMovieForm}
                setMovieToUpdate={setMovieToUpdate}
              />
            }
          />
        </Route>
        <Route path="register" element={<Auth />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
