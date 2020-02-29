import React, { useState, useEffect } from 'react';
import Mycards from "./Mycards"

  
  const Explore = () => {

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    //   });

    return (
        <div>
            <h1>Coach catcher</h1>
            <Mycards/>
        </div>
    );
};

export default Explore;