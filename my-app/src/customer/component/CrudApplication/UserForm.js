import React, { useState, useEffect } from "react";

const UserForm = ({ onSave, editUser, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  // Load data when editing
  useEffect(() => {
    if (editUser) setFormData(editUser);
  }, [editUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ name: "", address: "", phone: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{editUser ? "Edit User" : "Add User"}</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Enter Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <div>
        <button type="submit">{editUser ? "Update" : "Add"}</button>
        {editUser && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
