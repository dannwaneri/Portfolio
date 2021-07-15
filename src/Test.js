import React, {useState,useEffect} from 'react';


 export  const Test = () => {
    const [colorIndex,setColorIndex] = useState(0)
    let colors = ['blue', 'green', 'red','yellow', 'orange'];
    console.log(colors)
    
    useEffect(() => {
        document.body.style.backgroundColor = colors[colorIndex];
    })

    function handlechangeColor(){
        const nextIndex = colorIndex + 1 === colors.length ? 0 : colorIndex + 1
                setColorIndex(nextIndex)
    }
    return ( 
        <button onClick={handlechangeColor}>
            change background color
        </button>
     );
}
 
