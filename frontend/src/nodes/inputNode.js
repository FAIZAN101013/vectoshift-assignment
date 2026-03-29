import { FileInput } from 'lucide-react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      accent="#3b82f6"
      icon={<FileInput size={14} strokeWidth={2} aria-hidden />}
      updateNodeField={updateNodeField}
      fields={[
        {
          label: 'Name',
          type: 'text',
          key: 'inputName'
        },
        {
          label: 'Type',
          type: 'select',
          key: 'inputType',
          options: ['Text', 'File']
        }
      ]}
      handles={[
        {
          type: 'source',
          position: 'right',
          id: 'value'
        }
      ]}
    />
  );
};