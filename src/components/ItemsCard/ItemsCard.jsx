import react from "react"
import styles from "./ItemsCard.module.css"

const ItemsCard = ({ items }) => {
  return (
    items.map(item => {
      return <div>{item}</div>
    })
  )
}

export default ItemsCard;
