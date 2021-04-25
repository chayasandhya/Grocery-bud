import React, { useEffect } from "react";
//import { FaEdit, FaTrash } from "react-icons/fa";

function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div>
      <p className={`alert-${type}`}>{msg}</p>
    </div>
  );
}

export default Alert;
