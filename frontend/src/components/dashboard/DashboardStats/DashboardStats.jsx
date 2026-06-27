import { FiBarChart2 } from "react-icons/fi";
import "./DashboardStats.css";

function DashboardStats({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="stat-card glass-card"
        >
          <FiBarChart2 />

          <span>{stat.label}</span>

          <strong>{stat.value}</strong>
        </article>
      ))}
    </div>
  );
}

export default DashboardStats;