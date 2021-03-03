import { assert } from 'chai';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#animation', () => {
  it('should play an animation', () => {
    const frames = ['-', '--', '---'];
    const printedFrames = [];
    console.animation(frames, 0, (iteration, frame) => {
      printedFrames.push(frame);

      if (iteration === 2) { // Last frame
        assert.deepEqual(printedFrames, frames);
      }

      return iteration !== 2;
    }, true);
  });
});
