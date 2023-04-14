import React from "react";

function Map() {
  const IPL = [1, 2, 3, 1, 1];
   const result =IPL.map((ipl ,index)=><h1 key={index}>{ipl} index is {index}</h1>)

  return <div>{result}</div>;
}

export default Map;
