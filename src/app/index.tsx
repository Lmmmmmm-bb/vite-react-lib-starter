import React, { FC } from 'react';
import { Foo, Bar, HelloWorld } from '../../lib/main';

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
