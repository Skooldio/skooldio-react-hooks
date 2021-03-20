import { useState, useEffect } from "react";
import { Wrapper, CounterText, Button } from "./Components";

export const CounterPage = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter > 0 ? prevCounter - 1 : prevCounter
      );
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <CounterText>{counter}</CounterText>
      <div>
        <Button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
          -1
        </Button>{" "}
        <Button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
          +1
        </Button>
      </div>
    </Wrapper>
  );
};

export default CounterPage;
