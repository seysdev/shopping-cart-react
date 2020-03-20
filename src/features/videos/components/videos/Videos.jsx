import React, { useState, useEffect } from 'react';

import {
  VideoCard
} from '../videoCard/VideoCard';

import "./Videos.scss";

function Videos(props) {
 
  return <div>
    <VideoCard/>
  </div>;
}

export { Videos };
