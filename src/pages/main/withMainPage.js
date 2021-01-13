import React, { useState, useEffect, useCallback } from "react";
import hoist from "hoist-non-react-statics";

export function withMainPage(Component) {
  function WithMainPage(props) {
    const [input, setInput] = useState("");
    const [calculate, setCalculate] = useState("isPrime");
    const [result, setResult] = useState(null);

    const isPrime = useCallback((value) => {
      if (
        value === 1 ||
        (value % 2 === 0 && value !== 2) ||
        value % Math.sqrt(value) === 0
      ) {
        setResult(false);
        return;
      }
      if (value === 2) {
        setResult(true);
        return;
      }
      const optimizeLoop = Math.floor(Math.sqrt(value));
      for (let i = 3; i <= optimizeLoop; i++) {
        if (value % i === 0) {
          setResult(false);
          return;
        }
      }
      setResult(true);
      return;
    }, []);

    const isPerfectSqr = (value) => {
      const x = Math.floor(Math.sqrt(value));
      return x * x === value;
    };

    const isFibonacci = useCallback((value) => {
      if (value === 0) {
        setResult(false);
        return;
      }
      const a = isPerfectSqr(5 * value * value - 4);
      const b = isPerfectSqr(5 * value * value + 4);
      setResult(a || b);
    }, []);

    const onChangeInput = (value) => {
      //round it to the nearest integer.
      const inputNumber = document.getElementById("input-number");
      if (value >= 0) {
        setInput(Number(value).toFixed(0));
        inputNumber.value = Number(value).toFixed(0);
      } else {
        setInput(1);
        inputNumber.value = 1;
      }
    };

    const onChangeCalculate = (value) => {
      setCalculate(value.target.value);
    };

    useEffect(() => {
      if (input) {
        if (calculate === "isPrime") {
          isPrime(+input);
        } else {
          isFibonacci(+input);
        }
      }
    }, [calculate, input, isFibonacci, isPrime]);

    const newProps = {
      input,
      result,
      calculate,
      isPrime,
      onChangeCalculate,
      onChangeInput,
    };

    return <Component {...props} {...newProps} />;
  }

  hoist(WithMainPage, Component);

  WithMainPage.displayName = `withMainPage(${
    Component.displayName ?? Component.name ?? "Component"
  })`;

  return WithMainPage;
}
