import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase-config';
import { collection, addDoc, doc, getDoc, setDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import '../styles/AjouterEtudiant.css';
import { NavLink } from 'react-router-dom';

function AjouterEtudiant() {
  const [nomEleve, setNomEleve] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [students, setStudents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const idDocRef = doc(db, 'EtudiantTab', 'currentId');
      const idDoc = await getDoc(idDocRef);
      const currentId = idDoc.exists() ? idDoc.data().currentId + 1 : 1;

      // Ajoutez le nouvel étudiant
      await addDoc(collection(db, 'EtudiantTab'), {
        currentId,
        email,
        nomEleve,
        tel,
      });

      // Mettez à jour le document `currentId` avec le nouvel identifiant
      await setDoc(idDocRef, { currentId });

      // Réinitialisez le formulaire
      setNomEleve('');
      setEmail('');
      setTel('');

      alert('Étudiant ajouté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'étudiant :', error);
      alert('Erreur lors de l\'ajout de l\'étudiant.');
    }
  };

  useEffect(() => {
    // Observer les changements dans la collection EtudiantTab
    const q = query(collection(db, 'EtudiantTab'), orderBy('currentId', 'asc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const studentsList = [];
      querySnapshot.forEach((doc) => {
        studentsList.push({ ...doc.data(), id: doc.id });
      });
      setStudents(studentsList);
    });
    return () => unsubscribe();
  }, []);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
    <NavLink to="/Connections/AdminHome">
                <button className="back-btn1">Retour</button>
     </NavLink>

    <div className="form-container">
      {showForm ? (
        <>
          <h2>Ajouter un étudiant</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nom d'utilisateur :</label>
              <input
                type="text"
                value={nomEleve}
                onChange={(e) => setNomEleve(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Adresse Email :</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Téléphone :</label>
              <input
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
            <button type="submit">Ajouter</button>
          </form>
        </>
      ) : (
        <>
          <button onClick={toggleForm}>Ajouter étudiant</button>
          <div className="students-table-container">
            <h2>Liste des étudiants</h2>
            <table className="students-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Nom</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.currentId}</td>
                    <td>{student.email}</td>
                    <td>{student.tel}</td>
                    <td>{student.nomEleve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <button onClick={toggleForm}>{showForm ? 'Afficher les élèves' : 'Ajouter étudiant'}</button>
    </div>
    </>
  );
}

export default AjouterEtudiant;
