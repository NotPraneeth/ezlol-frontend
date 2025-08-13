import styles from './RunesCard.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const RunesCard = () => {
    const [runesData, setRunesData] = useState(null)
    const [runesTree, setRunesTree] = useState(null)


    useEffect(() => {
    axios.get('http://localhost:3000/api/test/Kayn/LeeSin')
        .then(res => {
            setRunesData(res.data.runes)
        })

    axios.get('https://ddragon.leagueoflegends.com/cdn/15.16.1/data/en_US/runesReforged.json')
        .then(res => {
            setRunesTree(res.data)
        })
    }, [])

    // useEffect(()=>{
    //     console.log(runesTree)
    // },[runesTree])

    if (!runesData || !runesTree) {
        return <div>Loading...</div>
    }
    
    const primary = runesData.primary
    const primaryTree = runesTree.find(tree => tree.id === primary.styleId)

    // console.log(primaryTree)
    // console.log(primary.styleId, runesTree.map(t => t.id))




  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className = {styles.left}>
                    <div className = {styles.leftTop}>
                        <div className = {styles.mainRune}><img className={styles.mainRuneImage} src={runesData.primary.styleIcon}></img></div>
                    </div>
                    <div className = {styles.runes}>
                        {primaryTree.slots.map((slot, slotIndex) => (
                            <div key={slotIndex} className={styles.runeRow}>
                                {slot.runes.map(rune => (
                                <img key={rune.id} src={`https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`} alt={rune.key} />
                                ))}
                            </div>
                            ))}
                    </div>
                </div>
                <div className = {styles.right}>
                    <div className = {styles.rightTop}>
                        <div className = {styles.mainRune}></div>
                    </div>
                    <div className = {styles.runes}></div>
                </div>
            </div>

        </div>
    </>
  )
}