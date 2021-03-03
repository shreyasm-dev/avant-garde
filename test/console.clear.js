import { assert } from 'chai';
import hookStd from 'hook-std';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#clear', () => {
  it('should clear the console', async () => {
    const promise = hookStd.stdout((output, unhook) => {
      unhook();
      assert.strictEqual(output, '\x1B[2J\x1B[u');
    });

    console.clear();
    await promise;
  });
});
