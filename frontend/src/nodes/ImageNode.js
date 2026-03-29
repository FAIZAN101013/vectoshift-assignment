import { Image as ImageIcon } from 'lucide-react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const ImageNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Image"
      accent="#f97316"
      icon={<ImageIcon size={14} strokeWidth={2} aria-hidden />}
      updateNodeField={updateNodeField}
      fields={[
        { label: 'URL', type: 'text', key: 'url' }
      ]}
      handles={[
        { type: 'source', position: 'right', id: 'image' }
      ]}
    />
  );
};