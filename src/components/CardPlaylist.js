import React from 'react';
import styles from '../css/CardPlaylist.module.css';

import series from '../content/images/icons/series-icon.png';

export default function ({ playlistLength }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.amount}>{playlistLength}</h3>
      <p className={styles.text}>Workouts</p>
      <img src={series} alt="Workout Playlist" className={styles.seriesIcon} />
    </div>
  )
}