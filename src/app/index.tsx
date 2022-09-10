import React, { FC } from 'react';
import { Foo } from '../../dist/vite-react-lib-starter.mjs';
import { Bar, HelloWorld } from 'vite-react-lib-starter';

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
