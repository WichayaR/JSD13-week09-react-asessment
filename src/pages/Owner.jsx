import Navbar from '../components/Navbar';
import profilePic from '../assets/profile.jpg';

export default function Owner() {
  return (
    <div className="min-h-screen bg-teal-50">
      <Navbar />
      <div className="flex flex-col items-center pt-12 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">47_Wichayaporn(Heinz/ไฮน์) - JSD13</h1>

        <div className="w-80 h-64 border-2 border-black mb-6 overflow-hidden flex items-center justify-center shadow-sm">
          <img
            src={profilePic}
            alt="Owner Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2">Short Biography:</h2>
        <p className="max-w-xl text-gray-700 text-sm leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ullam reprehenderit voluptates assumenda! Ipsam pariatur libero explicabo in vel quibusdam!
        </p>
      </div>
    </div>
  );
}