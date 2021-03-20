import { useState, useEffect } from "react";
import { Wrapper, CounterText, Button, Label, Input } from "./Components";

const getInitialCounter = () =>
  new Promise((res) => {
    setTimeout(() => res(10), 1000);
  });

export const CounterPage = () => {
  const [initialCounter, setInitialCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInitialCounter().then((initialCounter) => {
      setLoading(false);
      setInitialCounter(initialCounter);
    });
  }, []);

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
  if (loading) return <Wrapper>Loading...</Wrapper>;
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
      <Label>
        <span>Initial Counter</span>
        <Input
          value={initialCounter}
          onChange={(e) => setInitialCounter(e.target.value)}
        />
      </Label>
    </Wrapper>
  );
};

export default CounterPage;
