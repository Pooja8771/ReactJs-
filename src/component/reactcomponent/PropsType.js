import React from "react";
import PropTypes from "prop-types";

function PropsType(props) {
  return (
    <div>
      <h1>
        Hi I am {props.name} my Age is = {props.age} I am married =
        {String(props.isMarried)} 
        {props.isMarried.toString()}
      </h1>
      <h2>{props.arr}</h2>
    </div>
  );
}
// adding proptypes
PropsType.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
};

// Adding default values to props
PropsType.defaultProps = {
  name: "Raj",
  age: 14,
};

export default PropsType;
