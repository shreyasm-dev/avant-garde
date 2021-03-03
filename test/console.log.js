import { assert } from 'chai';
import hookStd from 'hook-std';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#log', () => {
  it('should print text', async () => {
    const promise = hookStd.stdout((output, unhook) => {
      unhook();
      assert.strictEqual(output, 'Hello, World!\n');
    });

    console.log('Hello,', 'World!');
    await promise;
  });
});
