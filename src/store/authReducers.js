const initialState = {
    username: '',
    password: '',
    valid: false,
    info: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_VALID':
      return { ...state, valid: action.payload };
    case 'SET_INFO':
      return { ...state, info: action.payload };
    default:
      return state;
  }
};

export default authReducer;
