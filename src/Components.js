import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 40px;
`;
export const Button = styled.button`
  font-size: 30px;
  font-weight: 700;
  color: white;
  background-color: #faa91a;
  padding: 15px 32px;
  margin-bottom: 60px;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  &:focus {
    outline: none;
  }
`;

export const CounterText = styled.h2`
  font-size: 96px;
`;

export const Input = styled.input`
  font-size: 20px;
  width: 200px;
  padding: 12px 16px;
  margin-top: 6px;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
`;
