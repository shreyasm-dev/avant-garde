import { assert } from 'chai';
import hookStd from 'hook-std';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#timestamp', () => {
  it('should enable/disable logging with a timestamp', async () => {
    const promise = hookStd.stdout((output, unhook) => {
      unhook();
      assert.strictEqual(output, `\x1b[31m[${new Date().toJSON()}]\x1b[0m Timestamp\n`);
    });

    console.timestamp(true);
    console.log('Timestamp');
    await promise;
  });
});
