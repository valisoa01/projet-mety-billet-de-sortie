import React, { useState } from 'react';
import imagehome from '../assets/Images/home.png';
import imagesetting from '../assets/Images/setting.png';
import imagelogout from '../assets/Images/logout.png';
import imageuser from '../assets/Images/user.png';
import mylogo from '../assets/Images/Logo.png';
import imagenotification from '../assets/Images/notification.png';
import styles from '../styles/SidebarEtudiant.css';

function SidebarEtudiant({ onSelectMenu }) {
    const [hovered, setHovered] = useState('');

    const handleMouseEnter = (menu) => {
        setHovered(menu);
    };

    const handleMouseLeave = () => {
        setHovered('');
    };

    return (
        <div className='SidebarEtudiant'>
            <img src={mylogo} alt="Logo" className='logo'/>
            {[
                { name: 'home', image: imagehome },
                { name: 'user', image: imageuser },
                { name: 'notifications', image: imagenotification },
                { name: 'settings', image: imagesetting },
                { name: 'logout', image: imagelogout }
            ].map((item) => (
                <div 
                className='menuItem'
                    onClick={() => onSelectMenu(item.name)}
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                >
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{
                            ...styles.icon,
                            width: hovered === item.name ? '30px' : '20px',
                            height: hovered === item.name ? '30px' : '20px'
                        }} 
                    />
                    {hovered === item.name && <div className='label'>{item.name}</div>}
                </div>
            ))}
        </div>
    );
}

 
 
   
   
   
  
    
    
    // Styles pour les très petits écrans (mobile)
    

export default SidebarEtudiant;
