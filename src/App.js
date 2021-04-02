import React from 'react';
import Card from './components/Card';

import Thumbnails from './Thumbnails';
import TrainerImages from './TrainersImages';

import styles from './css/App.module.css';

function App() {
  return (
    <div className={styles.Container} id="#">
      <Card
        heading="Lake Inniscarra, Ireland - Pyramid"
        cardImageSrc={Thumbnails.lake}
        trainerImgSrc={TrainerImages.lake}
        timeLength="30:53"
        distance="6,248"
        detailsUrl="#"
      >
      </Card>
      <Card
        heading="Performance Series"
        cardImageSrc={Thumbnails.performance}
        trainerImgSrc={TrainerImages.performance}
        playlistLength={9}
      >
      </Card>
      <Card
        heading="Slow Pulls and Fast Intervals"
        cardImageSrc={Thumbnails.pulls}
        trainerImgSrc={TrainerImages.pulls}
        timeLength="44:13"
        distance="9,948"
      >
      </Card>
      <Card
        heading="20 Minutes to Toned"
        cardImageSrc={Thumbnails.toned}
        trainerImgSrc={TrainerImages.toned}
        playlistLength={12}
      >
      </Card>
      <Card
        heading="Charles Race, Boston, Massachusetts"
        cardImageSrc={Thumbnails.charles}
        trainerImgSrc={TrainerImages.charles}
        timeLength="36:22"
        distance="8,648"
      >
      </Card>
      <Card
        heading="Full-Body HIIT Series"
        cardImageSrc={Thumbnails.fullBody}
        trainerImgSrc={TrainerImages.fullBody}
        playlistLength={12}
      >
      </Card>
      <Card
        heading="Kafue River, Zambia - Power Stroke Pyramid"
        cardImageSrc={Thumbnails.kafue}
        trainerImgSrc={TrainerImages.kafue}
        timeLength="22:22"
        distance="4,660"
      >
      </Card>
      <Card
        heading="Shred & Burn Series"
        cardImageSrc={Thumbnails.shred}
        trainerImgSrc={TrainerImages.shred}
        playlistLength={16}
      >
      </Card>
    </div>
  );
}

export default App;
