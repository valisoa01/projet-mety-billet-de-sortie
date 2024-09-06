import React from 'react';
import '../styles/AjouterEtudiant.css'
import { NavLink } from 'react-router-dom';

function SupprimerGardien() {
  return (
    <>
    <NavLink to="/Connections/AdminHome">
        <button className="back-btn">Retour</button>
     </NavLink>
    <div className="form-container">
      <h2>Supprimer un gardien</h2>
      <form>
        <div className="form-group">
          <label>Adresse Email :</label>
          <input type="email" />
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
    </>
  );
}

export default SupprimerGardien;