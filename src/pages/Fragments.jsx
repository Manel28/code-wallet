import { useEffect, useState } from 'react';

function Fragments() {
  const [fragments, setFragments] = useState([]);

  useEffect(() => {
    async function fetchFragments() {
      const data = await window.electronAPI.getFragments();
      setFragments(data || []);
    }

    fetchFragments();
  }, []);

  return (
    <div className="fragments-page">
      <h2 className="fragments-title">Mes Fragments Sauvegardés</h2>

      {fragments.length === 0 ? (
        <p className="no-fragments">Aucun fragment pour l’instant.</p>
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
  <button className="btn btn-view">Voir</button>
  <button className="btn btn-edit">Modifier</button>
  <button className="btn btn-delete">Supprimer</button>
</div>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fragments;
