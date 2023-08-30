import styles from '../styles/card.module.css'

const Card = ({data}) => {
  return (
    <div className={styles.card}>
        <h3>{data.name}</h3>
        <p>{data.tagline}</p>
        <img src={data.image_url} alt="beer-detail" className={styles.img}/>
    </div>
  )
}

export default Card