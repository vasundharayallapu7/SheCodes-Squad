import './Input.css';

function Input({ icon, label, className = '', ...props }) {
  return (
    <label className={`input-wrap ${className}`}>
      {label && <span>{label}</span>}
      <div className="input-field">
        {icon}
        <input {...props} />
      </div>
    </label>
  );
}

export default Input;
