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
    <div className="w-full max-w-4xl mx-auto mt-6">
      <h2 className="text-lg font-bold text-left mb-3 text-gray-900">Create User Here</h2>
      <form onSubmit={submitForm} className="flex gap-4 mb-10 items-center">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2.5 bg-white border border-gray-300 rounded shadow-inner flex-1 text-sm outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="p-2.5 bg-white border border-gray-300 rounded shadow-inner flex-1 text-sm outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="p-2.5 bg-white border border-gray-300 rounded shadow-inner flex-1 text-sm outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <button 
        type="submit"
        className="bg-violet-400 text-white px-7 py-2.5 rounded font-semibold text-sm hover:bg-violet-400 shadow transition-colors"
        >
          Save</button>
      </form>

      <Table members={members} isAdmin={true} handleDelete={handleDelete} />
    </div>
  );
}