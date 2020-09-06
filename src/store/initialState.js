const initialState = {
  preloadedState: {
    isSignInFormShowed: false,
    isUserSignedIn: !!localStorage.getItem('user'),
    isLoading: false,
    user: JSON.parse(localStorage.getItem('user')) || {},
    userEmail: '',
    userPassword: '',
  },
  contacts: {
    isTableView: true,
    isTiledView: false,
    isLoading: false,
    contactsCollection: JSON.parse(localStorage.getItem('contactsCollection')) || {},
  },
};

export default initialState;
