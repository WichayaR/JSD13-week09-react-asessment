import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserHome from '../components/UserHome';
import AdminHome from '../components/AdminHome';

const API_URL = 'https://67eca027aa794fb3222e43e2.mockapi.io/members';

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
    <div>
      <Navbar />

      <div>
        <h1>
          Generation Thailand <br />
          {sector === 'user' && 'Home - User Section'}
          {sector === 'admin' && 'Home - Admin Section'}
          {sector === 'default' && 'React - Assessment'}
        </h1>

        <div>
          <button
            onClick={() => setSector('user')}
          >
            User Home Section
          </button>
          <button
            onClick={() => setSector('admin')}
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