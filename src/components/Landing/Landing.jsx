
import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from './Landing.module.css'

export const Landing = () => {

  return (
    <>
        <div className = {styles.wrapper}>
            <div className = {styles.containerTop}>
                <div className = {styles.heroTextContainer}>
                    <h1 className = {styles.heroText}>BUILDS THAT MAKE SENSE</h1>
                    <p className={styles.heroSubtext}> The new player's guide to League Of Legends</p>
                </div>
                <div className = {styles.searchWrapper}>
                    <div className = {styles.searchContainer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                        <input type="text" className={styles.searchInput} placeholder="Game name +  #your tag"/>
                    </div>
                </div>
                
            </div>
            <div className = {styles.landingContainerBottom}>

            </div>
        </div>
    </>
  )
}
