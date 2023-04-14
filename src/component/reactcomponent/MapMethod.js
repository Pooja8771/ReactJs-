import React from "react";
import StuComponent from "./StuComponent";

function MapMethod() {
  const student = ["Rahul", "Raj", "Amit", "Jain"];

  // list of objects
  const students = [
    {
      id: 1,
      name: "Pooja",
      age: 34,
    },
    { id: 2, name: "Parul", age: 14 },
    {
      id: 3,
      name: "Priya",
      age: 24,
    },
  ];

  // const List = student.map((std, index) => <li key={index}>{std} </li>);
  return (
    <div>
      {/* {
        students.map(std =><h1>{std.name} and {std.age} </h1>)
      } */}
   
      {students.map((std) => (
        <StuComponent key ={std.id} std={std} />
      ))} 
      {/* <ul>{List}</ul> */}
    </div>
  );
}

export default MapMethod;
