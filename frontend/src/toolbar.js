import { DraggableNode } from './draggableNode';
import '../src/styles/toolbar.css';

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">

      {/* ── Top row: title + actions ── */}
      <div className="toolbar-top">
        <span className="toolbar-title">Flow Editor</span>
        
      </div>

      {/* ── Node palette row ── */}
      <div className="toolbar-inner">
        <span className="toolbar-section-label">Nodes</span>

        {/* OLD NODES */}
        <DraggableNode type='customInput' label='Input' />
        <DraggableNode type='llm'         label='LLM' />
        <DraggableNode type='customOutput' label='Output' />
        <DraggableNode type='text'        label='Text' />

        {/* NEW NODES */}
        <DraggableNode type='number'  label='Number' />
        <DraggableNode type='boolean' label='Boolean' />
        <DraggableNode type='image'   label='Image' />
        <DraggableNode type='api'     label='API' />
        <DraggableNode type='delay'   label='Delay' />
      </div>

    </div>
  );
};