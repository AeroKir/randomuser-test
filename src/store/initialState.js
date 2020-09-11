const initialState = {
  preloadedState: {
    isSignInFormShowed: false,
    isUserSignedIn: !!localStorage.getItem('user'),
    isLoading: false,
    isLoadingFail: false,
    user: JSON.parse(localStorage.getItem('user')) || {},
    userEmail: '',
    userPassword: '',
  },
  contacts: {
    isTableView: true,
    isTiledView: false,
    isLoading: false,
    contactsCollection: JSON.parse(localStorage.getItem('contactsCollection')) || [],
    collectionLength: JSON.parse(localStorage.getItem('collectionLength')) || 0,
    males: JSON.parse(localStorage.getItem('malesAmount')) || 0,
    females: JSON.parse(localStorage.getItem('femalesAmount')) || 0,
    indeterminate: JSON.parse(localStorage.getItem('indeterminateAmount')) || 0,
    contactsPerPage: 10,
    defaultCurrentPage: 1,
    currentPage: 1,
    isContactProfileLoading: false,
  },
};

export default initialState;
