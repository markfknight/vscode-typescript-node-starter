import { hello_world } from './hello_world';

test('returns "Hello World!!!"', () => {
    expect(hello_world()).toBe('Hello World!!!');
});
