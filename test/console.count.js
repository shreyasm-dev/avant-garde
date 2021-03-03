import { assert } from 'chai';
import mute from 'mute';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#count', () => {
  it('should count a label', () => {
    const unmute = mute();

    const countDefault = [
      console.count(),
      console.count(),
      console.count(),
    ];

    const countLabel = [
      console.count('myLabel'),
      console.count('myLabel'),
      console.count('myLabel'),
    ];

    unmute();

    assert.deepEqual(countDefault, [1, 2, 3]);
    assert.deepEqual(countLabel, [1, 2, 3]);
  });
});
