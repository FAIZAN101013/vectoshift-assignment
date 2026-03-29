import '../src/styles/draggable.css';

// Map node types to accent colors and icons
const NODE_CONFIG = {
  customInput:  { color: '#3b82f6', icon: '→' },
  llm:          { color: '#8b5cf6', icon: '◆' },
  customOutput: { color: '#10b981', icon: '←' },
  text:         { color: '#f59e0b', icon: 'T' },
  number:       { color: '#06b6d4', icon: '#' },
  boolean:      { color: '#ec4899', icon: '±' },
  image:        { color: '#f97316', icon: '▣' },
  api:          { color: '#3b82f6', icon: '⇌' },
  delay:        { color: '#6b7280', icon: '◷' },
};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const config = NODE_CONFIG[type] || { color: '#6b7280', icon: '○' };

  return (
    <div
      className="draggable-node"
      onDragStart={(event) => onDragStart(event, type)}
      draggable
      style={{ '--chip-accent': config.color }}
    >
      {/* Color dot */}
      <span className="draggable-node-dot" />

      {/* Label */}
      <span className="draggable-node-label">{label}</span>
    </div>
  );
};