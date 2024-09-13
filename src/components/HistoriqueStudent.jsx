import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import  '../styles/HistoriqueSortie.css';

export default function HistoriqueStudent() {
  const [historique, setHistorique] = useState([]); // État pour stocker l'historique
  const [detailsVisible, setDetailsVisible] = useState({}); // État pour gérer la visibilité des détails

  // Fonction pour récupérer les données de Firestore
  useEffect(() => {
    const fetchHistorique = async () => {
      try {
        const db = getFirestore(); // Initialiser Firestore
        const querySnapshot = await getDocs(collection(db, 'SortieConfirmé')); // Récupérer la collection "SortieConfirmé"

        // Extraire les données et les stocker dans le tableau historique
        const historiqueData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setHistorique(historiqueData); // Mettre à jour l'état avec les données récupérées
      } catch (error) {
        console.error("Erreur lors de la récupération de l'historique : ", error);
      }
    };

    fetchHistorique(); // Appeler la fonction au chargement du composant
  }, []); // Le tableau vide signifie que cet effet s'exécute une seule fois après le montage du composant

  // Fonction pour gérer l'affichage des détails
  const toggleDetails = (id) => {
    setDetailsVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Inverser la visibilité des détails pour l'ID donné
    }));
  };

  return (
    <>
      <div>
          <NavLink to="/Connections/AdminHome">
            <button className="back-btn">Retour</button>
          </NavLink>
        <h2>Vous êtes sorties pendant ces moment là:</h2>

        {/* Afficher un message si l'historique est vide */}
        {historique.length === 0 ? (
          <p>Aucun étudiant n'a encore été enregistré dans l'historique des sorties.</p>
        ) : (
          <table className="historique-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Date de Sortie</th>
                <th>Lieu</th>
                <th>Raison</th>
              </tr>
            </thead>
            <tbody>
              {historique.map((etudiant) => (
                <React.Fragment key={etudiant.id}>
                  <tr>
                    <td>{etudiant.Nom}</td>
                    <td>{etudiant.Date}</td>
                    <td>{etudiant.Lieu}</td>
                    <td>{etudiant.Raison}</td>
                  </tr>

                  {/* Détails supplémentaires en accordéon pour mobile */}
                  {detailsVisible[etudiant.id] && (
                    <tr className="details-row">
                      <td colSpan="7">
                        <div className="details-content">
                          <p><strong>Nom:</strong> {etudiant.Nom}</p>
                          <p><strong>Date de Sortie:</strong> {etudiant.Date}</p>
                          <p><strong>Lieu:</strong> {etudiant.Lieu}</p>
                          <p><strong>Raison:</strong> {etudiant.Raison}</p>
                          <p><strong>Heure de Sortie:</strong> {new Date(etudiant.heureSortie?.seconds * 1000).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>

                          <p><strong>Heure de Retour:</strong> {new Date(etudiant.heureRetour?.seconds * 1000).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                        </div>
                      </td>
                    </tr>
                  )}

                  {/* Bouton pour afficher/cacher les détails */}
                  <tr>
                    <td colSpan="7">
                      <button className="toggle-details-btn" onClick={() => toggleDetails(etudiant.id)}>
                        {detailsVisible[etudiant.id] ? "Cacher les détails" : "Afficher les détails"}
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    <NavLink to="/Connections/AdminHome">
        <button className="back-btn5">Retour</button>
     </NavLink>
    <div>
      <h2>Voici la liste des étudiants sorties</h2>
    </div>
    </>
  );
}
