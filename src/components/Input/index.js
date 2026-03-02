import React from "react";
import { InputContainer } from "./styles";

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input value={value} readOnly/>
    </InputContainer>
  );
};

export default Input;
