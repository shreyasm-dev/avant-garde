import { assert } from 'chai';
import hookStd from 'hook-std';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#error', () => {
  it('should print red text', async () => {
    const promise = hookStd.stdout((output, unhook) => {
      unhook();
      assert.strictEqual(output, '\u001b[31mHello, World!\u001b[31m\n');
    });

    console.error('Hello,', 'World!');
    await promise;
  });
});
