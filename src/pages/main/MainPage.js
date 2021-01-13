import React from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";

import { Input } from "../../components/Input/Input";
import { Select } from "../../components/Select/Select";

const options = ["isPrime", "isFibonacci"];

const MainPage = ({
  className,
  input,
  onChangeInput,
  onChangeCalculate,
  result,
}) => {
  return (
    <div className={className}>
      <div className="first-column">
        <Input
          id="input-number"
          type="number"
          className="field"
          onChange={debounce((e) => onChangeInput(e.target.value), 500)}
        />
      </div>
      <div className="second-column">
        <Select
          className="field"
          onChange={onChangeCalculate}
          options={options}
        />
      </div>
      <div className="third-column">
        {input ? (result ? "true" : "false") : ""}
      </div>
    </div>
  );
};

const StyledMainPage = styled(MainPage)`
  display: flex;
  min-width: 600px;
  overflow-x: scroll;

  > div {
    border-right: 1px solid black;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    height: 100vh;
  }

  > .first-column {
    width: 200px;

    > .field {
      width: 100px;
    }
  }

  > .second-column {
    width: 100%;
    min-width: 100px;
  }

  > .third-column {
    width: 300px;
  }
`;

export { StyledMainPage as MainPage };
