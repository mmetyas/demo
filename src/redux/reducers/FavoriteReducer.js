// redux/reducers/favorites.js
const INITIAL_VALUE = [];

const favoritesReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': 
      return [...state, action.payload];
    case 'REMOVE_FROM_FAVORITES':
      return state.filter(prduct => prduct.id !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer; 
 