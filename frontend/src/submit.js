import { useStore } from './store';
import '../src/styles/submit.css';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nodes, edges })
      });

      const data = await response.json();

      alert(
        `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
      );

    } catch (error) {
      console.error(error);
      alert('Error connecting to backend');
    }
  };

  return (
    <div className="submit-container">
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};