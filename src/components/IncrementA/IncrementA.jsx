import IncrementB from "./../IncrementB/IncrementB";
import { useEffect, useState } from "react";

export default function IncrementA() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    // const [counts, setCounts] = useState(0)
    const [totalValue, setTotalValue] = useState(0)
    const increment1 = () => {   
        setCount1(count1 + 1)
    }
    const increment2 = () => {   
        setCount2(count2 + 1)
    }

    // const array = [count1, count2]
    // console.log(array)
    // const totalValue = array.reduce((acco, current) => acco += current, 0)

    useEffect(()=>{
        setTotalValue(count1 + count2)
    }, [count1, count2])

  return (
    <>
      <div>
        <h1>Total:{totalValue}</h1>
        <IncrementB increment={increment1} count={count1} />
        <IncrementB increment={increment2} count={count2} />
      </div>
    </>
  );
}
