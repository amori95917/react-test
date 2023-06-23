export const addUser = (newUser) => ({
  type: "ADD_USER",
  payload: newUser,
});

export const deleteUser = (id) => ({
  type: "DELETE_USER",
  payload: id,
});

export const updateUser = (user) => ({
  type: "UPDATE_USER",
  payload: user,
});
