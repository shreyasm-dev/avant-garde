import { assert } from 'chai';
import mute from 'mute';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#json', () => {
  it('should pretty-print and highlight JSON', () => {
    const unmute = mute();

    const obj = {
      x: 1,
      y: 2,
      z: 3,
    };

    assert.strictEqual(console.json(obj), JSON.stringify(obj, null, 2));

    unmute();
  });
});
