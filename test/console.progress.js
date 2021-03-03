import { assert } from 'chai';
import hookStd from 'hook-std';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#progress', () => {
  it('should print a progress bar', async () => {
    const promise = hookStd.stdout((output, unhook) => {
      unhook();
      assert.strictEqual(output, `${'\u2588'.repeat(process.stdout.columns * (54 / 100))}\n`);
    });

    console.progress(54);
    await promise;
  });
});
