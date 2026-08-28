import Navbar from '../components/Navbar';
import profilePic from '../assets/profile.jpg';

export default function Owner() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>47_Wichayaporn(Heinz/ไฮน์) - JSD13</h1>

        <div>
          <img
            src={profilePic}
            alt="Owner Profile"
          />
        </div>

        <h2>Short Biography:</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ullam reprehenderit voluptates assumenda! Ipsam pariatur libero explicabo in vel quibusdam!
        </p>
      </div>
    </div>
  );
}