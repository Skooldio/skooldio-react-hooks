import { Wrapper, CounterText, Button } from "./Components";

export const CounterPage = () => {
  return (
    <Wrapper>
      <CounterText>10</CounterText>
      <div>
        <Button>-1</Button> <Button>+1</Button>
      </div>
    </Wrapper>
  );
};

export default CounterPage;
