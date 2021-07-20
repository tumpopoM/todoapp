export const addTodo = data => ({
  type: 'ADD_TODO',
  data,
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});

export const checkBoxTodo = id => ({
  type: 'CHECKBOX_TODO',
  id,
});

export const editTodo = data => ({
  type: 'EDIT_TODO',
  data,
});
