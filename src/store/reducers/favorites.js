const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_SUCCESS':
      return { ...state, data: [...state.data, action.payload.data], loading: false };
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, loading: true };

    default:
      return state;
  }
}
