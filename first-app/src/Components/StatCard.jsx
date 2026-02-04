export default function StatCard({ icon, label, value, color }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        {icon}
      </div>
      <div className="stat-text">
        <p>{label}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
}
