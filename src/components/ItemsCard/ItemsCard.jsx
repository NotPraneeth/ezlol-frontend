import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ItemsCard.module.css";

const ItemsCard = ({ items }) => {
  const [itemsData, setItemsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemIconBaseUrl = import.meta.env.VITE_BACKEND_ITEM_ICON_BASE_URL;
  const backendApiBaseUrl = import.meta.env.VITE_BACKEND_API_BASE_URL;

  useEffect(() => {
    if (!items || items.length === 0) {
      setIsLoading(false);
      return;
    }

    const fetchItemsData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${backendApiBaseUrl}/api/items`);
        setItemsData(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch items data:", err);
        setError("Could not load items information.");
        setIsLoading(false);
      }
    };

    fetchItemsData();
  }, [items, backendApiBaseUrl]);

  if (!items || items.length === 0) {
    return null;
  }

  if (isLoading) {
    return <div className={styles.wrapper}>Loading items...</div>;
  }

  if (error) {
    return <div className={styles.wrapper}>{error}</div>;
  }

  if (!itemsData) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {items.map((itemId) => {
          const itemInfo = itemsData[itemId];
          const itemName = itemInfo ? itemInfo.name : `Item ${itemId}`;
          
          return (
            <div key={itemId} className={styles.item}>
              <img 
                src={`${itemIconBaseUrl}/${itemId}.png`} 
                alt={itemName}
                className={styles.itemIcon}
              />
              <span className={styles.itemName}>{itemName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsCard;
