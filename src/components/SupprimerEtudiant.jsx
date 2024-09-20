import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import '../styles/SupprimerEtudiant.css';
import { NavLink } from 'react-router-dom';

function SupprimerEtudiant() {
  const [etudiants, setEtudiants] = useState([]);
  const [selectedEtudiant, setSelectedEtudiant] = useState(null);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    const fetchEtudiants = async () => {
      const querySnapshot = await getDocs(collection(db, 'EtudiantTab'));
      const students = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEtudiants(students.sort((a, b) => a.Identifiant - b.Identifiant));
    };
    
    fetchEtudiants();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'EtudiantTab', id));
      setEtudiants(etudiants.filter(student => student.id !== id));
      setShowConfirm(false);
      alert('Étudiant supprimé avec succès !');
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'étudiant :', error);
      alert('Erreur lors de la suppression de l\'étudiant.');
    }
  };

  const handleShowDetails = (etudiant) => {
    setSelectedEtudiant(etudiant);
    setShowDetailsModal(true); // Afficher le modal des détails
  };

  const handleCloseDetails = () => {
    setShowDetailsModal(false); // Fermer le modal des détails
    setSelectedEtudiant(null);
  };

  return (
    <>
      <NavLink to="/Connections/AdminHome">
        <button className="back-btn5"> Retour </button>
      </NavLink>
      <div className="container">
        <h2>Liste des étudiants</h2>
        {etudiants.length === 0 ? (
          <p>Aucun étudiant trouvé.</p>
        ) : (
          <div className="table-container"> {/* Ajout du conteneur scrollable */}
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  
                  <th>Actions</th>
                  
                </tr>
              </thead>
              <tbody>
                {etudiants.map(student => (
                  <tr key={student.id}>
                    <td>{student.nomEleve}</td>
                    <td>
                      <button
                        className="info-button"
                        onClick={() => handleShowDetails(student)}
                      >
                        Afficher Détails
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => {
                          setStudentToDelete(student.id);
                          setShowConfirm(true);
                        }}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
  
        {/* Modal pour afficher les détails de l'étudiant */}
        {showDetailsModal && selectedEtudiant && (
          <div className="modal">
            <div className="modal-content">
              <h3>Détails de l'étudiant</h3>
              <p><strong>Identifiant :</strong> {selectedEtudiant.identifiant}</p>
              <p><strong>Nom :</strong> {selectedEtudiant.nomEleve}</p>
              <p><strong>Email :</strong> {selectedEtudiant.email}</p>
              <p><strong>Téléphone :</strong> {selectedEtudiant.tel}</p>
              {/* Ajoutez d'autres champs si nécessaire */}
              <button className="close-button" onClick={handleCloseDetails}>Fermer</button>
            </div>
          </div>
        )}
  
        {/* Modal de confirmation pour la suppression */}
        {showConfirm && (
          <div className="confirm-dialog">
            <p>Êtes-vous sûr de vouloir supprimer cet étudiant ?</p>
            <button
              className="confirm-button"
              onClick={() => handleDelete(studentToDelete)}
            >
              Valider
            </button>
            <button
              className="cancel-button"
              onClick={() => setShowConfirm(false)}
            >
              Annuler
            </button>
          </div>
        )}
      </div>
    </>
  );
  
}

export default SupprimerEtudiant;
