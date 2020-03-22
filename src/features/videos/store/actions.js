import {
  VIDEOS_SET_VIDEOS,
  VIDEOS_SET_CURRENT_VIDEO
} from './constants';

function setVideos(payload) {
  return {
    type: VIDEOS_SET_VIDEOS,
    payload
  }
}

function setCurrentVideo(payload) {
  return {
    type: VIDEOS_SET_CURRENT_VIDEO,
    payload
  }
}

export {
  setVideos,
  setCurrentVideo
}