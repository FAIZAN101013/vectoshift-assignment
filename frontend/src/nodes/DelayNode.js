import { Clock } from 'lucide-react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const DelayNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Delay"
      accent="#6b7280"
      icon={<Clock size={14} strokeWidth={2} aria-hidden />}
      updateNodeField={updateNodeField}
      fields={[
        { label: 'Seconds', type: 'text', key: 'seconds' }
      ]}
      handles={[
        { type: 'target', position: 'left', id: 'input' },
        { type: 'source', position: 'right', id: 'output' }
      ]}
    />
  );
};