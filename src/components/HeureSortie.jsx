import React from 'react'
import { NavLink } from 'react-router-dom';

export default function HeureSortie() {
  return (
    <>
    <NavLink to="/Connections/AdminHome">
        <button className="back-btn">Retour</button>
     </NavLink>
    <div>
      <h2>Voici les heures de sortie disponible :</h2>
    </div>
    </>
  )
}
