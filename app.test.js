const { hello } = require('./app.js');

test('hello function should return Hello World!', () => {
expect(hello("Martin")).toBe('Hello World from Martin!');
});
