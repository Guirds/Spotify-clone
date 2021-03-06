import React from 'react';
import Slider from 'rc-slider';

import {
  Container, Current, Volume, Progress, Controls, ProgressSlider, Time,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => (
  <Container>
    <Current>
      <img
        src="http://www.naijaloaded.com.ng/wp-content/uploads/2016/12/YUNGTIZZY-SHELEGANGAN-ART-700x700.jpg"
        alt="cover"
      />

      <div>
        <span>Times like these</span>
        <small>Foo fighters</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          {' '}
          <img src={ShuffleIcon} alt="Shuffle" />
          {' '}
        </button>
        <button>
          {' '}
          <img src={BackwardIcon} alt="BackwardIcon" />
          {' '}
        </button>
        <button>
          {' '}
          <img src={PlayIcon} alt="PlayIcon" />
          {' '}
        </button>
        <button>
          {' '}
          <img src={PauseIcon} alt="PauseIcon" />
          {' '}
        </button>
        <button>
          {' '}
          <img src={ForwardIcon} alt="ForwardIcon" />
          {' '}
        </button>
        <button>
          {' '}
          <img src={RepeatIcon} alt="RepeatIcon" />
          {' '}
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:29</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
