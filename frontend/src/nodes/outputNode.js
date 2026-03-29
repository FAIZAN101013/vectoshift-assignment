import { ArrowLeftFromLine } from 'lucide-react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      accent="#10b981"
      icon={<ArrowLeftFromLine size={14} strokeWidth={2} aria-hidden />}
      updateNodeField={updateNodeField}
      fields={[
        {
          label: 'Name',
          type: 'text',
          key: 'outputName'
        },
        {
          label: 'Type',
          type: 'select',
          key: 'outputType',
          options: ['Text', 'Image']
        }
      ]}
      handles={[
        {
          type: 'target',
          position: 'left',
          id: 'value'
        }
      ]}
    />
  );
};