import React from "react";
import styles from "./StartingItemsCard.module.css";

export const StartingItemsCard = ({ startingItemsAndSummoners }) => {
  const itemIconBaseUrl = import.meta.env.VITE_BACKEND_ITEM_ICON_BASE_URL;
  const summonerSpellsBaseUrl = import.meta.env.VITE_BACKEND_SUMMONERSPELLS_ICON_BASE_URL;

  if (!startingItemsAndSummoners) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {startingItemsAndSummoners.startingItems.map((item) => {
          return (
            <div key={item} className={styles.startingItem}>
              <img src={`${itemIconBaseUrl}/${item}.png`} alt={`Item ${item}`} />
            </div>
          );
        })}
      </div>

      <div className={styles.wrapper}>
        {startingItemsAndSummoners.summonerSpells.map((spell) => {
          return (
            <div key={spell} className={styles.startingItem}>
              <img src={`${summonerSpellsBaseUrl}/${spell}.png`} alt={`Spell ${spell}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
