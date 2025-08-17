import React from "react";
import styles from "./StartingItemsCard.module.css";

export const StartingItemsCard = ({ startingItems }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {startingItems.map((item) => {
          return (
            <div key={item} className={styles.startingItem}>
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};
