import { FC } from 'react';
import styled from 'styled-components';
import { HelloWorld } from 'vite-react-lib-starter';

const StyledWrapper = styled.div`
  text-align: center;
`;

const App: FC = () => {
  return (
    <StyledWrapper>
      Hello Playground
      <HelloWorld message='Vite React Lib Starter'>This is children</HelloWorld>
    </StyledWrapper>
  );
};

export default App;
