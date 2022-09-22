import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimation = () => {
   const [text, setText] = useState("");
   const renderRef = useRef(-1);


   useEffect(() => {

      renderRef.current = renderRef.current + 1;

   });


   return (
      <div>
         <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
         />
         <h1>Renders:{renderRef.current}</h1>
      </div>
   );
};

export default ScrollAnimation;