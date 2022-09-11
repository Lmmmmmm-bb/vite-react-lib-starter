import HelloWorld from '..';

describe('hello-world', () => {
  it('test', () => {
    const wrapper = <HelloWorld />;
    expect(true).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
