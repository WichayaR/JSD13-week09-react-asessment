import Table from './Table';

export default function UserHome({ members }) {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <Table members={members} isAdmin={false} />
    </div>
  );
}