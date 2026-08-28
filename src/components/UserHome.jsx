import Table from './Table';

export default function UserHome({ members }) {
  return (
    <div>
      <Table members={members} isAdmin={false} />
    </div>
  );
}