import React, {useState} from 'react'
import styles from './Track.module.css'

const Track = ({track, onAdd, onRemove, isRemoval}) => {

    
    const handleAdd = () => {
        onAdd(track);  // Pass the track object when adding to playlist
      };

    const handleRemove = () => {
        console.log("Removing:", track);
        onRemove(track);
    }

    return (
        <div className={styles.trackLine} >
            <div className={styles.content}>
                <p className={styles.trackName}>{track.name}</p>
                <p className={styles.details}>{track.album} | {track.artist}</p>
            </div>
            <div className={styles.button}>
            {isRemoval ? (
                <button type="button" onClick={handleRemove}>-</button>  // Placeholder for remove button
            ) : (
                <button onClick={handleAdd}>+</button>  // Add to playlist
            )}
            </div>
        </div>
    )
}

export default Track
