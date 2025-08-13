import styles from './RunesCard.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const RunesCard = () => {
    const response = {
    "items": [
        "Youmuu's Ghostblade",
        "Spear of Shojin",
        "Black Cleaver",
        "Serylda's Grudge",
        "Opportunity",
        "Voltaic Cyclosword"
    ],
    "runes": {
        "primary": {
            "styleId": 8100,
            "styleIcon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png",
            "perks": [
                {
                    "perkId": 8128,
                    "icon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png"
                },
                {
                    "perkId": 8143,
                    "icon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png"
                },
                {
                    "perkId": 8140,
                    "icon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/GrislyMementos/GrislyMementos.png"
                },
                {
                    "perkId": 8135,
                    "icon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/TreasureHunter/TreasureHunter.png"
                }
            ]
        },
        "secondary": {
            "styleId": 8300,
            "styleIcon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Whimsy.png",
            "perks": [
                {
                    "perkId": 8347,
                    "icon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png"
                },
                {
                    "perkId": 8304,
                    "icon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png"
                }
            ]
        },
        "stats": {
            "perks": [
                {
                    "perkId": 5001,
                    "icon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsHealthPlusIcon.png"
                },
                {
                    "perkId": 5008,
                    "icon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png"
                },
                {
                    "perkId": 5008,
                    "icon": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png"
                }
            ]
        }
    }
}
    const [runes, setRunes] = useState([])
    const[searchTerm, setSearchTerm] = useState('')

    function fetchRunes(){
        axios.get('http://localhost:3000/api/test/Kayn/LeeSin').then(res => setRunes(res.data))
    }
    console.log(runes)
  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className = {styles.left}>
                    <div className = {styles.leftTop}>
                        <div className = {styles.mainRune}><img src={response.runes.primary.styleIcon}></img></div>
                    </div>
                    <div className = {styles.runes}>
                        {response.runes.primary.perks.map((perk, index) => (
                            <div key={index} className={styles.rune}>
                                <img src={perk.icon} alt={`Rune ${perk.perkId}`} />
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
