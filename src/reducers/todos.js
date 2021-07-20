const todosList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.data];
    case 'DELETE_TODO':
      console.log('delete: ', state);
      const index = state.findIndex(i => {
        return i.id === action.id;
      });
      state.splice(index, 1);
      return [...state];
    // case 'DELETE_TODO':
    //   return state.map(todo =>
    //     todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
    //   );
    default:
      console.log('default: ', state);
      return state;
  }
};

export default todosList;
