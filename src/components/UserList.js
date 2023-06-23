import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../actions/userActions";
import { input, modal, button } from "bootstrap";
import "./styles.css";

const UserList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");

  useEffect(() => {}, [users]);

  useEffect(() => {
    setName(selectedUser.name);
    setEmail(selectedUser.email);
    setPermissions(selectedUser.permissions);
  }, [selectedUser]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const dispatch = useDispatch();

  const findUserById = (id) => {
    if (!Array.isArray(users)) {
      return null;
    }
    const user = users.find((u) => u.id === id);
    return user;
  };

  const currentUser = (id) => {
    const user = findUserById(id);
    setSelectedUser(user);
  };

  const handleEditUser = () => {
    const id = selectedUser.id;
    const image = selectedUser.image;

    const updatedUser = {
      id,
      name,
      email,
      image,
      permissions: permissions,
    };
    dispatch(updateUser(updatedUser));
  };

  return (
    <div className="main-body">
      <div className="sidebar ">
        <ul className="menu">
          <li>
            <img
              className="site-icon"
              src={process.env.PUBLIC_URL + "/icons/11.png"}
              alt="Иконка"
            />
          </li>
          <li className="menu-photo">
            <img
              className="menu-icon-photo"
              src={process.env.PUBLIC_URL + "/346545.jpg"}
              alt="Иконка"
            />
            <div style={{ display: "inline-block" }} className="descrip">
              <p>
                <strong>
                  Юлия <br /> Кузнецова
                </strong>
              </p>
              <p>Собственник</p>
            </div>
          </li>
          <li className="menu-content">
            <img
              className="menu-icon"
              src={process.env.PUBLIC_URL + "/icons/1.png"}
              alt="Иконка"
            />
            <div className="descrip">
              <h className="menu-text">Аналитика</h>
            </div>
          </li>
          <li className="menu-content">
            <img
              className="menu-icon"
              src={process.env.PUBLIC_URL + "/icons/2.png"}
              alt="Иконка"
            />
            <div className="descrip">
              <h className="menu-text">Профиль</h>
            </div>
          </li>
          <li className="menu-content">
            <img
              className="menu-icon"
              src={process.env.PUBLIC_URL + "/icons/3.png"}
              alt="Иконка"
            />
            <div className="descrip">
              <h className="menu-text">Модерация</h>
            </div>
          </li>
          <li className="menu-content">
            <img
              className="menu-icon"
              src={process.env.PUBLIC_URL + "/icons/4.png"}
              alt="Иконка"
            />
            <div className="descrip">
              <h className="menu-text">Чаты</h>
            </div>
          </li>
          <li className="menu-content">
            <img
              className="menu-icon"
              src={process.env.PUBLIC_URL + "/icons/5.png"}
              alt="Иконка"
            />
            <div className="descrip">
              <h className="menu-text">Баннеры</h>
            </div>
          </li>
          <li className="menu-content">
            <img
              className="menu-icon"
              src={process.env.PUBLIC_URL + "/icons/6.png"}
              alt="Иконка"
            />
            <div className="descrip">
              <h className="menu-text">Команда</h>
            </div>
          </li>
          <li className="menu-content">
            <img
              className="menu-icon"
              src={process.env.PUBLIC_URL + "/icons/7.png"}
              alt="Иконка"
            />
            <div className="descrip">
              <h className="menu-text">Блог</h>
            </div>
          </li>
          <li className="menu-content">
            <img
              className="menu-icon"
              src={process.env.PUBLIC_URL + "/icons/8.png"}
              alt="Иконка"
            />
            <div className="descrip">
              <h className="menu-text">Курсы</h>
            </div>
          </li>
          <li className="menu-content">
            <img
              className="menu-icon"
              src={process.env.PUBLIC_URL + "/icons/10.png"}
              alt="Иконка"
            />
            <div className="descrip">
              <h className="menu-text">Выйти</h>
            </div>
          </li>
        </ul>
      </div>
      <div className="bodyContainer">
        <div className="header">
          <div className="mobileHeader">
            <img
              className="toggle-menu-icon"
              src={process.env.PUBLIC_URL + "/menu2.png"}
              alt="Иконка"
            />
            <h1 className="title">Команда</h1>
          </div>

          <div className="input-container ">
            <input
              type="text"
              className="form-control"
              placeholder="Поиск по Email"
            />

            <img
              className="fa fa-user icon"
              style={{ marginRight: "0.5em", width: "1em", height: "1em" }}
              src={process.env.PUBLIC_URL + "/Vector.png"}
              alt="Иконка"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Добавить пользователя
          </button>
        </div>

        <br />
        <div className="tableContainer">
          <table
            hover
            table
            className="table table-hover"
            style={{ width: "100%" }}
          >
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="user-imgTd">
                    <img
                      className="user-imgs"
                      src={user.image}
                      alt={user.name}
                    />
                  </td>
                  <td className="user-permTd">
                    <div className="user-name-email">
                      <strong className="user-name">{user.name}</strong>
                      &nbsp;&nbsp;&nbsp;
                      <h className="user-email"> {user.email}</h>
                    </div>
                    <br />
                    {user.permissions.split(",").map((permission) => (
                      <div className="border border-secondary-subtle">
                        {permission}
                      </div>
                    ))}
                  </td>
                  <td className="dropdownIcon">
                    <div className="dropdown">
                      <button className="dropbtn">
                        <img src={process.env.PUBLIC_URL + "/Group.png"} />
                      </button>
                      <div className="dropdown-content">
                        <button
                          className="buttons"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <img
                            className="dropbtns"
                            src={process.env.PUBLIC_URL + "/trash.png"}
                          />
                        </button>

                        <button
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#editModal"
                          className="buttons btnedit"
                          onClick={() => currentUser(user.id)}
                        >
                          <img
                            className="dropbtns"
                            src={process.env.PUBLIC_URL + "/edit.png"}
                          />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="modal fade " id="editModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-body">
                    <h4>Редактирование</h4>
                    <br />
                    <img className="selectPhoto" src={selectedUser.image} />
                    <br />
                    <br />
                    <strong>Имя:</strong>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <strong>Почта:</strong>
                    <input
                      className="form-control"
                      type="tel"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <strong>Разрешения:</strong>
                    <input
                      className="form-control"
                      type="tel"
                      id="permissions"
                      value={permissions}
                      onChange={(e) => setPermissions(e.target.value)}
                    />

                    <div className="modal-actions">
                      <br />
                      <button
                        className="btn btn-success"
                        onClick={handleEditUser}
                        data-bs-dismiss="modal"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;