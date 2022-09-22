import React, { useRef, useState } from 'react';

const MediaPlayer = () => {
   const [isvidio, setIsvidio] = useState(false);

   const videoRef = useRef();

   const handlePlay = () => {
      const video = videoRef.current;
      isvidio ? video.pause() : video.play()
      setIsvidio(!isvidio);
   }


   return (
      <div>
         <video with="400" ref={videoRef}>
            <source src="/public/videos/galaxia.mp4" type="video/mp4" />
         </video>

         <button onClick={handlePlay}>
            {isvidio ? 'Pause' : 'Play'}
         </button>

      </div>
   );
};

export default MediaPlayer;