// Import Actions

// Initial State
const initialState = {
  generic : ''
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getGeneric = state => state.app.generic;

// Export Reducer
export default AppReducer;
