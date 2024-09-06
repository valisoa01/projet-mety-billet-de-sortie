import React, { useState } from 'react';
import SidebarGardien from '../components/SidebarGardien';
import BodyGardien from '../components/BodyGardien';
 
function GardeHome() {
    const [selectedMenu, setSelectedMenu] = useState('home');

    return (
        <div style={styles.app}>
            <SidebarGardien onSelectMenu={setSelectedMenu} />
            <BodyGardien selectedMenu={selectedMenu}  />     
        </div>
    );
}

const styles = {
    app: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
    }, 
    '@media (max-width: 768px)':{
        app: {
            flexDirection: 'column',
            height: 'auto',
            width: '100vw',
            padding: '10px',
            margin: '0px',
            gap: '10px',
            SidebarGardien: {
            width: '100%',
            height: 'auto',
            BodyGardien: {
            width: '100%',
            height: 'auto',
            },
        }

    }  
}
  

}

export default GardeHome;