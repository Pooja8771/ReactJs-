import React, { useState } from "react";

function USWithArray() {
  const num = [11, 22, 33, 44, 55];

  const [numbers, setNumbers] = useState(num);

//   const changeList =() =>{
//     setNumbers([66,77,88,99,100])
//   }



const changeList =() =>{
    setNumbers(prevState =>{
        return[
            ...prevState,
           // 34
        Math.floor( Math.random()*10)

        ]
    })
  }
  return (
    <div>
      <ul>
        {numbers.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
      <button onClick= {changeList}>Change Array </button>
    </div>
  );
}

export default USWithArray;
