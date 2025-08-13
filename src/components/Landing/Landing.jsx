import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Landing.module.css';
import { RunesCard } from '../RunesCard/RunesCard.jsx';

export const Landing = () => {
    const [matchupData, setMatchupData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/test/MasterYi/LeeSin')
            .then(response => {
                setMatchupData(response.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch matchup data:", err);
                setError("Could not load matchup information.");
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading Matchup...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.containerTop}>
                    <div className={styles.heroTextContainer}>
                        <h1 className={styles.heroText}>BUILDS THAT MAKE SENSE</h1>
                        <p className={styles.heroSubtext}> The new player's guide to League Of Legends</p>
                    </div>
                    <div className={styles.searchWrapper}>
                        <div className={styles.searchContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                            <input type="text" className={styles.searchInput} placeholder="Game name +  #your tag" />
                        </div>
                    </div>
                </div>
                <div className={styles.landingContainerBottom}>
                    {matchupData && <RunesCard runesData={matchupData.runes} />}
                </div>
            </div>
        </>
    )
}