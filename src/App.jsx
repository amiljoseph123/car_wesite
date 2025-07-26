import React from 'react'
import { useState } from "react";
import Background from './components/Background/Background.JSX'; 



const App = () => {

 

  let heroData = [
  { text1: "Dive into", text2: " What you love" },
  { text1: "Dive into", text2: " What you love" },
  { text1: "Dive into", text2: " What you love" }
]

  const [heroCount,setHeroCount] = useState(0);
  
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>

      
    </div>
  )
}

export default App



