import React, { useState } from 'react';
import WorkoutAttribute from "./WorkoutAttribute";
import CardPlaylist from "./CardPlaylist";

import styles from "../css/Card.module.css";

import track from "../content/images/icons/track-icon.png";
import clock from "../content/images/icons/timer-icon.png";

function useSelected() {
  const [selected, setSelected] = useState(false);

  function toggleSelect() {
    setSelected((prev) => !prev);
  }

  return {
    selected,
    toggleSelect
  };
}

export default function Card({
  heading,
  cardImageSrc,
  trainerImgSrc,
  timeLength,
  distance,
  detailsUrl,
  playlistLength
}) {

  const { selected, toggleSelect } = useSelected();

  const cardClass = selected
    ? `${styles.cardContainer} ${styles.selected}`
    : styles.cardContainer

  return (
    <div
      className={cardClass}
      onClick={toggleSelect}
    >
      <div
        className={styles.cardHeading}
        style={{ backgroundImage: `url(${cardImageSrc})` }}
      >
        {
          playlistLength &&
          <CardPlaylist playlistLength={playlistLength} />
        }
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyHeading}>
          <h3>
            {heading}
          </h3>
          <img
            src={trainerImgSrc}
            alt={heading}
            className={styles.trainerPhoto}
          />
        </div>
        <div className={styles.cardBodyAttributesRow}>
          {
            timeLength &&
            <WorkoutAttribute
              text={timeLength}
              iconSrc={clock}
              iconImgAlt="Workout length"
            />
          }
          {
            distance &&
            <WorkoutAttribute
              text={`${distance} M`}
              iconSrc={track}
              iconImgAlt="Workout distance"
            />
          }
        </div>
        {
          detailsUrl &&
          <a href={detailsUrl} className={styles.link}>
            View Details
          </a>
        }
      </div>
    </div>
  );
}