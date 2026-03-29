import { Webhook } from 'lucide-react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const APINode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      title="API"
      accent="#2563eb"
      icon={<Webhook size={14} strokeWidth={2} aria-hidden />}
      updateNodeField={updateNodeField}
      fields={[
        { label: 'Endpoint', type: 'text', key: 'endpoint' }
      ]}
      handles={[
        { type: 'target', position: 'left', id: 'input' },
        { type: 'source', position: 'right', id: 'response' }
      ]}
    />
  );
};