import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/userActions";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState("");

  const handleAddUser = () => {
    const newUser = {
      name,
      email,
      permissions,
    };
    dispatch(addUser(newUser));
    setName("");
    setEmail("");
    setPermissions("");
  };

  return (
    <div>
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Добавление пользователя</h4>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />
              <br />
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <br />
              <input
                className="form-control"
                type="text"
                value={permissions}
                onChange={(e) => setPermissions(e.target.value)}
                placeholder="Разрешения (через запятую)"
              />
            </div>

            <div class="modal-footer">
              <button
                class="btn-add"
                data-bs-dismiss="modal"
                onClick={handleAddUser}
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserForm;
