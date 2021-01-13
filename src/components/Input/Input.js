import React from "react";
import styled from "styled-components";

const Input = ({ className, onChange, type, ...props }) => {
  return (
    <input className={className} onChange={onChange} type={type} {...props} />
  );
};

const StyledInput = styled(Input)``;

export { StyledInput as Input };
