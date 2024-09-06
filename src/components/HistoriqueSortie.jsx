import React from 'react'
import { NavLink } from 'react-router-dom';

export default function HistoriqueSortie() {
  return (
    <>
    <NavLink to="/Connections/AdminHome">
        <button className="back-btn">Retour</button>
     </NavLink>
    <div>
      <h2>Voici la liste des étudiants sorties</h2>
    </div>
    </>
  )
}
