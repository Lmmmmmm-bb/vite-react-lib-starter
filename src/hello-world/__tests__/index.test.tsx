import HelloWorld from '..';

describe('hello-world', () => {
  it('test', () => {
    const wrapper = <HelloWorld message='Hello' />;
    expect(true).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
