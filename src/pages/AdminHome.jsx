import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AdminBody from '../components/AdminBody';

function AdminHome() {
    const [selectedMenu, setSelectedMenu] = useState('home');

    return (
        <div style={styles.app}>
            <Sidebar onSelectMenu={setSelectedMenu} />
            <AdminBody selectedMenu={selectedMenu}  />     
        </div>
    );
}

const styles = {
    app: {
        display: 'flex'
    }
};

export default AdminHome;
