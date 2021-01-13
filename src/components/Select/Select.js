import React from "react";
import styled from "styled-components";

const Select = ({ className, options, onChange }) => {
  return (
    <select className={className} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const StyledSelect = styled(Select)``;

export { StyledSelect as Select };
