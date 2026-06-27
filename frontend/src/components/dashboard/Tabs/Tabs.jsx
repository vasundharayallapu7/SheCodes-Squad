import './Tabs.css';

function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="tabs" role="tablist" aria-label="Study material sections">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={activeTab === tab.id ? 'active' : ''}
          onClick={() => onChange(tab.id)}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
