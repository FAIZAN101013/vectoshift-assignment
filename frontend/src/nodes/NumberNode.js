import { Hash } from 'lucide-react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const NumberNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Number"
      accent="#06b6d4"
      icon={<Hash size={14} strokeWidth={2} aria-hidden />}
      updateNodeField={updateNodeField}
      fields={[
        { label: 'Value', type: 'text', key: 'value' }
      ]}
      handles={[
        { type: 'source', position: 'right', id: 'number' }
      ]}
    />
  );
};