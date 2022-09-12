import { FC } from 'react';
import { HelloWorld } from 'vite-react-lib-starter';

const App: FC = () => {
  return (
    <div>
      Hello Playground
      <HelloWorld message='Vite React Lib Starter'>This is children</HelloWorld>
    </div>
  );
};

export default App;
