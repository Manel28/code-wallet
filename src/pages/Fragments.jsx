import { useEffect, useState } from 'react';



function Fragments() {
  const [fragments, setFragments] = useState([]);
  
const [selectedFragment, setSelectedFragment] = useState(null);

  useEffect(() => {
    async function fetchFragments() {
      const data = await window.electronAPI.getFragments();
      setFragments(data || []);
    }

    fetchFragments();
  }, []);
  const handleCopyCode = () => {
    if (selectedFragment) {
      navigator.clipboard.writeText(selectedFragment.code)
        .then(() => alert('Code copied to clipboard!'))
        .catch((err) => console.error('	Error while copying', err));
    }
  };
  return (
    <div className="fragments-page">
      <h2 className="fragments-title">My Saved Fragments</h2>

      {fragments.length === 0 ? (
        <p className="no-fragments">	No fragments yet.</p>
      ) : (
        <ul className="fragments-list">
          {fragments.map(fragment => (
            <li key={fragment.id} className="fragment-card">
              <h3 className="fragment-title">{fragment.title}</h3>
              <p className="fragment-tags"><strong>Tags :</strong> {fragment.tags.join(', ')}</p>

              <pre className="fragment-code">
                {fragment.code}
              </pre>

              <div className="fragment-buttons">
              <button className="btn btn-view" onClick={() => setSelectedFragment(fragment)}>View</button>
  <button className="btn btn-edit">Edit</button>
  <button className="btn btn-delete">Delete</button>
</div>

            </li>
          ))}
        </ul>
      )}
    
      {/*  MODALE */}
      {selectedFragment && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedFragment.title}</h2>
            <p><strong>Tags :</strong> {selectedFragment.tags.join(', ')}</p>
            <pre className="modal-code">{selectedFragment.code}</pre>

            <div className="modal-buttons">
              <button className="btn btn-copy" onClick={handleCopyCode}>📋 Copy</button>
              <button className="btn btn-close" onClick={() => setSelectedFragment(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fragments;
