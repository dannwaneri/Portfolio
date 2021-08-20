import React,{useState,useCallback} from 'react';


 const Counter = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count,setCount] = useState(0);

  const  increaseCount = useCallback(() => setCount(count=>count+1),[])
  const  decreaseCount = useCallback(() => setCount(count=>count-1),[])
  const  resetCount = useCallback(() => setCount(0),[])
    return(
        <><div>{count}</div><button onClick={increaseCount}>IncreaseCount</button><button onClick={decreaseCount}>decreaseCount</button><button onClick={resetCount}>resetCount</button></>
    )
}


export default Counter;

