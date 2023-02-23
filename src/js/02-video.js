import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const updateMoment = data => {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  console.log(data);
};

const player = new Player(iframe);

player.on('timeupdate', throttle(updateMoment, 1000));

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
