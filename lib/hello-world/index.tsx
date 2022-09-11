import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const HelloWorld: FC = () => <Wrapper>Hello World Component</Wrapper>;

export default HelloWorld;
