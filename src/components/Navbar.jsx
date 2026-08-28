import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-end gap-10 px-12 py-5 border-b border-gray-400 bg-gray-100 font-bold text-lg text-gray-900">
      <Link to="/" className="hover:text-cyan-500 hover:underline transition-colors hover:underline">Home</Link>
      <Link to="/owner" className="hover:text-cyan-500 hover:underline transition-colors">Owner</Link>
    </div>
  );
}