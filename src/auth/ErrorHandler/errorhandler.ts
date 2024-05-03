import { FirebaseError } from 'firebase/app';

export const generateErrorMessage = (error: FirebaseError) => {
  switch (error?.code) {
    case 'auth/invalid-credential':
      alert('Either email or password is incorrect. Please try again.');
      break;
    default:
      alert('Some error occurred. Please try again.');
      break;
  }
};
