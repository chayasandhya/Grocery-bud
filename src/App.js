import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import List from "./List";
import Alert from "./Alert";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "enter value");
    } else if (name && isEditing) {
    } else {
      showAlert(true, "success", "Items added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const deleteItem = (id) => {
    showAlert(true, "danger", "item deleted");
    setList(list.filter((item) => item.id != id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);

    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };
  return (
    <section className="section-center">
      <div className="grocery-container">
        <form className="form-section" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>Grocery Bud</h3>
          <input
            type="text"
            placeholder="e.g. cake"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button className="submit-btn" type="submit">
            {isEditing ? "edit" : "submit"}
          </button>
          {list.length > 0 && (
            <div className="grocery-list-container">
              <List items={list} deleteItem={deleteItem} editItem={editItem} />
              <button onClick={clearList}> clear items</button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default App;
