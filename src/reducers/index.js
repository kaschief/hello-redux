export default (state, action) => {
  switch (action.type) {
    case 'SET_TECHNOLOGY':
      return {
        ...state,
        tech: action.tech
      }; //makes a copy of the state and changes the action to the new value passed in from the dispatch

    default:
      return state;
  }
};
