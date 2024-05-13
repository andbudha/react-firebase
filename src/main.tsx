import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { LoginProvider } from './contexts/auth_context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {' '}
    <LoginProvider>
      {' '}
      <App />
    </LoginProvider>
  </BrowserRouter>
);
