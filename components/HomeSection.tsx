'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
type Props = {}

const HomeSection = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const changePlaybackSpeed = (speed:number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  useEffect(() =>{
    changePlaybackSpeed(1)
  },[])
  return (
    <div className='h-screen overflow-hidden relative top-0 z-0 -mt-20'>
        <div className='absolute top-0 left-0 z-10 h-full w-screen bg-black opacity-30' />
        <video ref={videoRef} className='w-full h-screen object-cover' loop autoPlay muted controls={false} src='./Background.mp4' />
    </div>
  )
}

export default HomeSection