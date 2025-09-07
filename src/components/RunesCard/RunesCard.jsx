import styles from './RunesCard.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const RunesCard = ({runesData}) => {
    const [runesTree, setRunesTree] = useState(null)

    useEffect(() => {
        const fetchRuneData = async () => {
            try {
                const versionsResponse = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
                const latestVersion = versionsResponse.data[0];
                
                const ddragonResponse = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/runesReforged.json`);
                setRunesTree(ddragonResponse.data);
            } catch (error) {
                console.error("Error fetching rune definitions from Data Dragon:", error);
            }
        };

        fetchRuneData();
    }, [])

    if (!runesData || !runesTree) {
        return <div>Loading...</div>
    }
    
    const primary = runesData.primary
    const primaryTree = runesTree.find(tree => tree.id === primary.styleId)

    const secondary = runesData.secondary;
    const secondaryTree = runesTree.find(tree => tree.id === secondary.styleId);

    const selectedPerkIds = new Set([
        ...primary.perks.map(p => p.perkId),
        ...secondary.perks.map(p => p.perkId),
    ]);

    if (!primaryTree || !secondaryTree) {
        return <div>Processing rune data...</div>
    }

  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className = {styles.left}>
                    <div className = {styles.leftTop}>
                        <div className = {styles.mainRune}><img className={styles.mainRuneImage} src={`${import.meta.env.VITE_BACKEND_API_BASE_URL}/${runesData.primary.styleIcon}`}></img></div>
                    </div>
                    <div className = {styles.runes}>
                        {primaryTree.slots.map((slot, slotIndex) => (
                            <div key={slotIndex} className={styles.runeRow}>
                                {slot.runes.map(rune => {
                                const isActive = selectedPerkIds.has(rune.id);
                                return(
                                <img key={rune.id} className={isActive ? styles.runeActive : styles.runeInactive} src={`${import.meta.env.VITE_BACKEND_API_BASE_URL}/${rune.icon}`} alt={rune.key} />
                                )})}
                            </div>
                            ))}
                    </div>
                </div>
                <div className = {styles.right}>
                    <div className = {styles.rightTop}>
                        <div className = {styles.mainRune}><img className={styles.mainRuneImage} src={`${import.meta.env.VITE_BACKEND_API_BASE_URL}/${runesData.secondary.styleIcon}`}></img></div>
                    </div>
                    <div className = {styles.runes}>
                        {secondaryTree.slots.map((slot, slotIndex) => (
                            <div key={slotIndex} className={`${styles.runeRow} ${styles.secondaryTreeRuneRow}`}>
                                {slot.runes.map(rune => {

                                const isActive = selectedPerkIds.has(rune.id);
                                return (
                                <img key={rune.id} src={`${import.meta.env.VITE_BACKEND_API_BASE_URL}/${rune.icon}`} alt={rune.key} className={isActive ? styles.runeActive : styles.runeInactive} />
                                )})
                                }
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}