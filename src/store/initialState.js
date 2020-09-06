const initialState = {
  preloadedState: {
    isSignInFormShowed: false,
    isUserSignedIn: !!localStorage.getItem('user'),
    isLoading: false,
    user: JSON.parse(localStorage.getItem('user')) || {},
    userEmail: '',
    userPassword: '',
  },
};

export default initialState;
