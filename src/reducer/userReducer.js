export const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  user: JSON.parse(localStorage.getItem("user")) || {},
  token: JSON.parse(localStorage.getItem("token")) || false,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        token: true,
      };
    case "LOG_OUT":
        return {
            ...state,
            user: {},
            token:false
        }
  }
};
