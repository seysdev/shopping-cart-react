import {
  initialState
} from './state';

import {
  VIDEOS_SET_VIDEOS,
  VIDEOS_SET_CURRENT_VIDEO
} from './constants';

function VideosReducer(state = initialState, action) {
  switch (action.type) {
    case VIDEOS_SET_VIDEOS: {
      const {
        payload
      } = action;

      return Object.assign({}, state, {
        allVideos: [
          ...state.allVideos,
          payload
        ]
      })
    }

    case VIDEOS_SET_CURRENT_VIDEO: {
      const {
        payload
      } = action;

      return Object.assign({}, state, {
        currentVideo: payload
      })
    }

    default:
      return state
  }
}

export {
  VideosReducer
}