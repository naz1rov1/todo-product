import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../store/authSlice";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);

  // Formda user ma'lumotlari (name, surname, email kabi) bo'lishi mumkin
  const [form, setForm] = useState({
    name: user?.name || "",
    surname: user?.surname || "",
    email: user?.email || "",
  });

  const submit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(form)); // Redux state yangilanadi
    alert("Profile updated!"); // Opsional
  };

  return (
    <div className="center-page">
      <h1>Profile</h1>

      <form
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Surname"
          value={form.surname}
          onChange={(e) => setForm({ ...form, surname: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
