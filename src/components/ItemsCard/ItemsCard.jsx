import react from "react"
import styles from "./ItemsCard.module.css"

const ItemsCard = ({ items }) => {
  const itemIconBaseUrl = import.meta.env.VITE_BACKEND_ITEM_ICON_BASE_URL;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <div key={index} className={styles.itemRow}>
            <span className={styles.number}>{index + 1}</span>
            <div className={styles.imageContainer}>
              <img
                src={`${itemIconBaseUrl}/${item.id}.png`}
                alt={item.name}
                className={styles.image}
              />
            </div>
            <span className={styles.name}>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ItemsCard;
