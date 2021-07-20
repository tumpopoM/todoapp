const todosList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.data];
    case 'DELETE_TODO':
      const indexDel = state.findIndex(i => {
        return i.id === action.id;
      });
      state.splice(indexDel, 1);
      return [...state];
    case 'CHECKBOX_TODO':
      const indexCheck = state.findIndex(i => {
        return i.id === action.id;
      });
      state[indexCheck].isDone = !state[indexCheck].isDone;
      return [...state];
    case 'EDIT_TODO':
      const index = state.findIndex(i => {
        return i.id === action.data.id;
      });
      state[index].title = action.data.inputTitle;
      state[index].description = action.data.inputDescription;
      return [...state];
    default:
      return state;
  }
};

export default todosList;
