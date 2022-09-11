import { FC, PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

interface IHelloWorldProps {
  message: string;
}

const HelloWorld: FC<PropsWithChildren<IHelloWorldProps>> = (props) => {
  const { children, message } = props;
  const [count, setCount] = useState(0);

  return (
    <StyledWrapper>
      <div>{message}</div>
      <div>{children}</div>
      {count}
      <StyledButton onClick={() => setCount(count + 1)}>+</StyledButton>
    </StyledWrapper>
  );
};

export default HelloWorld;
