import { ToggleLeft } from 'lucide-react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const BooleanNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Boolean"
      accent="#ec4899"
      icon={<ToggleLeft size={14} strokeWidth={2} aria-hidden />}
      updateNodeField={updateNodeField}
      fields={[
        {
          label: 'Value',
          type: 'select',
          key: 'value',
          options: ['true', 'false']
        }
      ]}
      handles={[
        { type: 'source', position: 'right', id: 'bool' }
      ]}
    />
  );
};