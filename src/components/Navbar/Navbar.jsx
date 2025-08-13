import styles from './Navbar.module.css'
import {useState} from 'react'

export const Navbar = () => {
    const [activeNavState, setActiveNavState] = useState('Live Match')
    const navLinks = ['Live Match', 'Browse Matchups']
    return(
        <>
        <nav className= {styles.navbarWrapper}>
            <div className={styles.navbarContainer}>
                <div className={styles.navbarContainerLeft}>CLARITY.GG</div>
                <div className={styles.navbarContainerRight}>
                    <ul className={styles.navbarContainerRightList}>
                        {navLinks.map(navLink=> (
                            <li className={`${styles.navbarContainerRightListItem} ${activeNavState === `${navLink}` ? styles.active : styles.inactive}`} onClick={() => setActiveNavState(`${navLink}`)}>{navLink}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

