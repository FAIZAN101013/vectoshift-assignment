import { Type } from 'lucide-react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import { useEffect } from 'react';

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const updateNodeInternals = useUpdateNodeInternals();

  const text = data.text || '';

  //  extract valid JS variables
  const matches =
    text.match(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g) || [];

  const variables = [...new Set(
    matches.map((m) =>
      m.replace(/{{\s*|\s*}}/g, '')
    )
  )];

  //  CRITICAL FIX
  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  return (
    <div
      style={{
        position: 'relative',
        '--node-accent': '#f59e0b',
      }}
    >

      {/* Dynamic LEFT handles */}
      {variables.map((variable, index) => (
        <Handle
          key={`${id}-${variable}`}
          type="target"
          position={Position.Left}
          id={`input-${variable}`}
          className="text-node-handle"
          style={{
            top: `${20 + index * 25}%`
          }}
        />
      ))}

      <BaseNode
        id={id}
        data={data}
        title="Text"
        accent="#f59e0b"
        icon={<Type size={14} strokeWidth={2} aria-hidden />}
        updateNodeField={updateNodeField}
        fields={[
          {
            label: 'Text',
            type: 'textarea',
            key: 'text'
          }
        ]}
        handles={[
          {
            type: 'source',
            position: 'right',
            id: 'output'
          }
        ]}
      />
    </div>
  );
};