import { helloWorld } from './HelloWorld';

test('returns "Hello World!!!"', () => {
    expect(helloWorld()).toBe('Hello World!!!');
});
