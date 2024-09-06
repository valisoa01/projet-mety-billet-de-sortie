import React, { useState } from 'react';
import SidebarEtudiant from '../components/sidebarEtudiant';
import MainEtudiant from '../components/MainEtudiant';

function StudentHome() {
    const [selectedMenu, setSelectedMenu] = useState('home');

    return (
        <div style={styles.app}>
            <SidebarEtudiant onSelectMenu={setSelectedMenu} />
            <MainEtudiant selectedMenu={selectedMenu}  />     
        </div>
    );
}

const styles = {
    app: {
        display: 'flex'
    }
};

export default StudentHome;
