import { Bot } from 'lucide-react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const LLMNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      accent="#8b5cf6"
      icon={<Bot size={14} strokeWidth={2} aria-hidden />}
      updateNodeField={updateNodeField}
      fields={[]}
      handles={[
        {
          type: 'target',
          position: 'left',
          id: 'system',
          style: { top: '30%' }
        },
        {
          type: 'target',
          position: 'left',
          id: 'prompt',
          style: { top: '70%' }
        },
        {
          type: 'source',
          position: 'right',
          id: 'response'
        }
      ]}
    />
  );
};