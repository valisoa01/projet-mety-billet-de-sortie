import React, { useState } from 'react';
import imagehome from '../assets/Images/home.png';
import imagesetting from '../assets/Images/setting.png';
import imagelogout from '../assets/Images/logout.png';
import imageuser from '../assets/Images/user.png';
import mylogo from '../assets/Images/Logo.png';
import imagenotification from '../assets/Images/notification.png';

function SidebarEtudiant({ onSelectMenu }) {
    const [hovered, setHovered] = useState('');

    const handleMouseEnter = (menu) => {
        setHovered(menu);
    };

    const handleMouseLeave = () => {
        setHovered('');
    };

    return (
        <div style={styles.SidebarGardient}>
            <img src={mylogo} alt="Logo" style={styles.logo} />
            {[
                { name: 'home', image: imagehome },
                { name: 'user', image: imageuser },
                { name: 'notifications', image: imagenotification },
                { name: 'settings', image: imagesetting },
                { name: 'logout', image: imagelogout }
            ].map((item) => (
                <div 
                    style={styles.menuItem} 
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
                    {hovered === item.name && <div style={styles.label}>{item.name}</div>}
                </div>
            ))}
        </div>
    );
}

const styles = {
    pageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',  // Assure que tout est centré verticalement
        backgroundColor: '#F0F4F8', // Couleur de fond agréable
        padding: '20px',
        
        '@media (max-width: 768px)': {
            padding: '10px',
            height: 'auto',
        },
    },
    SidebarGardient: {
        width: '120px',
        backgroundColor: '#009DE1',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        borderRadius: '20px',
        marginTop: '2px',
        marginBottom: '2px',
        transition: 'width 0.3s ease-in-out',
        marginLeft: '2px',

        '@media (max-width: 768px)': {
            width: '60px', 
            height: 'auto',
            borderRadius: '10px',
        },
        '@media (max-width: 480px)': {
            width: '50px',
        }
    },
    logo: {
        width: '60px',
        marginBottom: '30px',
        transition: 'width 0.3s ease-in-out',

        '@media (max-width: 768px)': {
            width: '50px',
        },
        '@media (max-width: 480px)': {
            width: '40px',
        }
    },
    menuItem: {
        width: '60px',
        height: '80px',
        marginBottom: '20px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease',

        '@media (max-width: 768px)': {
            width: '50px',
            height: '70px',
        },
        '@media (max-width: 480px)': {
            width: '40px',
            height: '60px',
        }
    },
    icon: {
        width: '20px',
        height: '20px',
        transition: 'width 0.3s ease-in-out, height 0.3s ease-in-out',

        '@media (max-width: 768px)': {
            width: '16px',
            height: '16px',
        },
        '@media (max-width: 480px)': {
            width: '12px',
            height: '12px',
        }
    },
    label: {
        marginTop: '5px',
        fontSize: '10px',
        color: 'white',
        textTransform: 'capitalize',
        transition: 'font-size 0.3s ease-in-out',

        '@media (max-width: 768px)': {
            fontSize: '9px',
        },
        '@media (max-width: 480px)': {
            fontSize: '8px',
        }
    }
};


export default SidebarEtudiant;
