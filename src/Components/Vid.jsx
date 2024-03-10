import React from 'react'
import VideoBG from '/home/xcx/CODE/Project-2/WeatherApp/public/Videos/Rain.mp4'

export const Vid = () => {
  return (
    <div className="">
      <video src={VideoBG} className='h-auto w-auto' autoPlay loop >
      </video>
    </div>
  );
}

export default Vid;
