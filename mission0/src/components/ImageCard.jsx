import React from 'react'
import styles from "./ImageCard.module.css"

export default function ImageCard(props) {
  return (
    <>
    <div className={styles.imageCard}>
    <div className={styles.topImage}>
        <img src={props.img} alt="cloud" className={styles.cloudImage}/>
    </div>
    <div className={styles.bottomInfoText}>
        <h2>{props.type}</h2>
        <p>{props.info}</p>
    </div>
    </div>
    </>
  )
}
