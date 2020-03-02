import { AUTH_FETCH, AUTH_RESOLVE, AUTH_REJECT, AUTH_CANCEL, TOKEN_REFRESH } from '../types/authTypes';

// Initial State
const initialState = {
  status: 'idle',
  isAuthenticated: false,
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FETCH: {
      return {
        ...state,
        status: 'loading'
      }
    }
    case AUTH_RESOLVE: {
      return {
        ...state,
        status: 'success',
        isAuthenticated: true,
        user: action.payload,
        error: null
      }
    }
    case TOKEN_REFRESH: {
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      }
    }
    case AUTH_REJECT: {
      return {
        ...state,
        status: 'failure',
        error: action.payload
      }
    }
    case AUTH_CANCEL: {
      return {
        ...state,
        status: 'idle',
        isAuthenticated: false,
        user: null,
        error: null
      }
    }
    default: {
      return state;
    }
  }
};

export default authReducer;