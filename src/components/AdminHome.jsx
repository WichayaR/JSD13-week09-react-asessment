import { useState } from "react";
import Table from "./Table";

export default function AdminHome({ members, handleCreate, handleDelete }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (name && lastname && position) {
      handleCreate({ name, lastname, position });
      setName("");
      setLastname("");
      setPosition("");
    }
  };

  return (
    <div>
      <h2>Create User Here</h2>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>

      <Table members={members} isAdmin={true} handleDelete={handleDelete} />
    </div>
  );
}