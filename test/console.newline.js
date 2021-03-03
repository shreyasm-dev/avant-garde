import { assert } from 'chai';
import hookStd from 'hook-std';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#newline', () => {
  it('should print new lines', async () => {
    const promise = hookStd.stdout((output, unhook) => {
      unhook();
      assert.strictEqual(output, '\n\n');
    });

    console.newline(2);
    await promise;
  });
});
