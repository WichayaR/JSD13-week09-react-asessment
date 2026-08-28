import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserHome from '../components/UserHome';
import AdminHome from '../components/AdminHome';

const API_URL = 'https://6a904f6cff2484963a5df376.mockapi.io/api/v1/members';

export default function Home() {
  const [members, setMembers] = useState([]);
  const [sector, setSector] = useState('default');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleCreate = async (newMember) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMember),
      });
      if (res.ok) {
        getData();
      }
    } catch (error) {
      console.error('Create error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        getData();
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 pb-16">
      <Navbar />

      <div className="text-center pt-16 px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Generation Thailand <br />
          {sector === 'user' && 'Home - User Section'}
          {sector === 'admin' && 'Home - Admin Section'}
          {sector === 'default' && 'React - Assessment'}
        </h1>

        <div className="flex justify-center gap-16 mt-12 mb-10">
          <button
            onClick={() => setSector('user')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2 rounded-md"
          >
            User Home Section
          </button>
          <button
            onClick={() => setSector('admin')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-4 py-2 rounded-md"
          >
            Admin Home Section
          </button>
        </div>

        {sector === 'user' && <UserHome members={members} />}
        {sector === 'admin' && (
          <AdminHome
            members={members}
            handleCreate={handleCreate}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}