import React from 'react'
import styles from './Track.module.css'

const Track = (props) => {
    
    const trackName = "Versace on the Floor";
    const albumName = "24K Magic";
    const artistName = "Bruno Mars";

    return (
        <div className={styles.trackLine}>
            <div className={styles.content}>
                <p className={styles.trackName}>{props.name}</p>
                <p className={styles.details}>{props.album} | {props.artist}</p>
            </div>
            <div className={styles.button}>
                <button>+</button>
            </div>
        </div>
    )
    }

export default Track
