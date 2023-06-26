const initialState = {
  users: [
    {
      id: 0,
      name: "Артем Иванов",
      email: "artfem@gmail.com",
      permissions: "Блог, Аналитика",
      image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg",
    },
    {
      id: 1,
      name: "Лена Новикова",
      email: "lenkfan@gmail.com",
      permissions: "Администратор",
      image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg",
    },
    {
      id: 2,
      name: "Айжулдыз Кошкинбай",
      email: "aizhzk@gmail.com",
      permissions: "Обращение, клиентов",
      image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg",
    },
    {
      id: 3,
      name: "Лена Новикова",
      email: "lenkan@gmail.com",
      permissions: "Администратор",
      image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg",
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const _users = state.users;
      _users.push({
        id: state.users.length + 1,
        name: action.payload.name,
        email: action.payload.email,
        permissions: action.payload.permissions,
        image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg",
      });
      return { ...state, users: [..._users] };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case "UPDATE_USER":
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      return { ...state, users: [...updatedUsers] };

    default:
      return state;
  }
};

export default userReducer;
