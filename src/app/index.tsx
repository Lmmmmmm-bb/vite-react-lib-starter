import React, { FC } from 'react';
import { Foo, Bar, HelloWorld } from '../../dist/vite-react-lib-starter.mjs';

const App: FC = () => {
  return (
    <div>
      <div>Hello World</div>
      <Foo />
      <Bar />
      <HelloWorld />
    </div>
  );
};

export default App;
