import { Handle, Position } from "reactflow";
import "../styles/BaseNode.css";

const DefaultNodeIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden className="base-node-icon-svg">
    <rect
      x="2"
      y="2"
      width="12"
      height="12"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const BaseNode = ({
  id,
  data,
  title,
  icon,
  accent,
  fields = [],
  handles = [],
  updateNodeField,
}) => {
  const renderField = (field) => {
    const value = data[field.key] || "";

    switch (field.type) {
      case "text":
        return (
          <input
            type="text"
            value={value}
            placeholder={field.placeholder || ""}
            onChange={(e) => updateNodeField(id, field.key, e.target.value)}
            className="base-node-input"
          />
        );

      case "select":
        return (
          <select
            value={value}
            onChange={(e) => updateNodeField(id, field.key, e.target.value)}
            className="base-node-input"
          >
            {(field.options ?? []).map((opt, i) => (
              <option key={`${field.key}-${opt}-${i}`} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            value={value}
            placeholder={field.placeholder || ""}
            onChange={(e) => updateNodeField(id, field.key, e.target.value)}
            className="base-node-input"
            rows={3}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
          />
        );

      default:
        return null;
    }
  };

  const leftHandles = handles.filter((h) => h.position === "left");
  const rightHandles = handles.filter((h) => h.position === "right");

  return (
    <div
      className="base-node"
      style={accent ? { "--node-accent": accent } : undefined}
    >
      {/* ── Header ── */}
      <div className="base-node-header">
        <div className="base-node-icon">{icon ?? <DefaultNodeIcon />}</div>
        <span className="base-node-title">{title}</span>
      </div>

      {/* ── Body / Fields ── */}
      <div className="base-node-fields">
        {fields.map((field, i) => (
          <div key={field.key ?? i} className="base-node-field">
            <label className="base-node-label">{field.label}</label>
            {renderField(field)}
          </div>
        ))}
      </div>

      {/* ── Footer / Ports ── */}
      {handles.length > 0 && (
        <div className="base-node-footer">
          <div className="base-node-ports base-node-ports--left">
            {leftHandles.map((handle, i) => (
              <span
                key={handle.id ?? `left-${i}`}
                className="base-node-port-label"
              >
                {handle.label || ""}
              </span>
            ))}
          </div>
          <div className="base-node-ports base-node-ports--right">
            {rightHandles.map((handle, i) => (
              <span
                key={handle.id ?? `right-${i}`}
                className="base-node-port-label"
              >
                {handle.label || ""}
              </span>
            ))}
          </div>
        </div>
      )}

     
      {handles.map((handle, i) => (
        <Handle
          key={handle.id ?? i}
          type={handle.type}
          position={handle.position === "left" ? Position.Left : Position.Right}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
          className="base-node-handle"
        />
      ))}
    </div>
  );
};
