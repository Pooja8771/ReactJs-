import React from "react";
import { useContext } from "react";
import { NameContext } from "../App";
import { HelloContext } from "../App";
function CompC() {
  const myName = useContext(NameContext);

  const Hello = useContext(HelloContext);

  return (
   
    <div>
      <h1> I am Component C</h1>
      <h1>{myName}</h1>
      <h2> {Hello}</h2>
    </div>
    
  );
 
}

export default CompC;
