import React from "react";
import styled from "styled-components";

const Question2 = ({ className, categories, handleChangeFilter }) => {
  return (
    <div className={className}>
      <input onChange={handleChangeFilter} />
      {categories.map((cat) => (
        <div>{cat}</div>
      ))}
    </div>
  );
};

const StyledQuestion2 = styled(Question2)``;

export { StyledQuestion2 as Question2 };
