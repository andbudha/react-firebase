import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export type LoginContextType = {
  loggedInUserID: string | undefined;
  setLoggedInUserID: Dispatch<SetStateAction<string | undefined>>;
};

const loginInitialState = {
  loggedInUserID: '',
  setLoggedInUserID: (userID: string | undefined) => userID,
} as LoginContextType;

export const LoginContext = createContext(loginInitialState);

type LoginProviderProps = {
  children: ReactNode;
};

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [loggedInUserID, setLoggedInUserID] = useState<string | undefined>('');

  const logInValues = {
    loggedInUserID,
    setLoggedInUserID,
  };

  return (
    <LoginContext.Provider value={logInValues}>
      {children}
    </LoginContext.Provider>
  );
};
