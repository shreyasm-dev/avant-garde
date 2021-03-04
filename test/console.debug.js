import { assert } from 'chai';
import hookStd from 'hook-std';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#debug', () => {
  it('should print blue text', async () => {
    const promise = hookStd.stdout((output, unhook) => {
      unhook();
      assert.strictEqual(output, '\u001b[34mHello, World!\u001b[34m\n');
    });

    console.debug('Hello,', 'World!');
    await promise;
  });
});
