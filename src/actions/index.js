export const addTodo = data => ({
  type: 'ADD_TODO',
  data,
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});
