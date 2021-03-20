import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Wrapper, CounterText, Button, Label, Input } from "./Components";
import { useApi } from "./hooks";

export const CounterPage = () => {
  const [counter, setCounter] = useState(0);
  const inputEl = useRef(null);
  const { loading, initialCounter, setInitialCounter } = useApi();

  useEffect(() => {
    if (!loading) {
      inputEl.current.focus();
    }
  }, [loading]);
  useEffect(() => {
    let id;
    setCounter(initialCounter);
    id = setInterval(() => {
      console.log("Countdown:", initialCounter);
      setCounter((prevCounter) =>
        prevCounter > 0 ? prevCounter - 1 : prevCounter
      );
    }, 1000);

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [initialCounter]);
  console.log("re-render");
  const decrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter - 1);
  }, [setCounter]);
  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, [setCounter]);
  const handleChange = useCallback(
    (e) => {
      setInitialCounter(e.target.value);
    },
    [setInitialCounter]
  );
  if (loading) return <Wrapper>Loading...</Wrapper>;
  return (
    <Wrapper>
      <CounterText>{counter}</CounterText>
      <div>
        <Button onClick={decrement}>-1</Button>{" "}
        <Button onClick={increment}>+1</Button>
      </div>
      <Label>
        <span>Initial Counter</span>
        <Input ref={inputEl} value={initialCounter} onChange={handleChange} />
      </Label>
    </Wrapper>
  );
};

export default CounterPage;
