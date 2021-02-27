import 'core-js';
import colorize from 'json-colorizer';
import logUpdate from 'log-update';

/**
 * If the value returned is falsy, the animation will stop playing
 * @callback animationCallback
 * @param {int} iteration - Iteration number
 * @returns {boolean}
 */

const console = {

  /**
   * Play an animation asynchronously
   * @param {array.<string>} frames - Array of frames to play
   * @param {number} intervalTime - How many milliseconds each frame should be shown for
   * @param {animationCallback} callback - Function to run after the current frame is shown
   * @returns {number}
   */

  animation: (frames, intervalTime = 1, callback = () => true) => {
    let iteration = 0;

    const interval = setInterval(() => {
      logUpdate(frames[iteration % frames.length]);

      if (!callback(iteration)) {
        clearInterval(interval);
      }

      iteration++;
    }, intervalTime);

    return interval;
  },

  /**
   * Cursor control
   */

  cursor: {
    /**
     * Hide the cursor
     */

    hide: () => process.stdout.write('\x1B[?25l'),

    /**
     * Show the cursor
     */

    show: () => process.stdout.write('\x1B[?25h'),
  },

  /**
   * Pretty-print, highlight, and log some JSON to the console
   * @param {*} json - Content to convert to JSON and log
   * @param {number} [indentation=2] - How many spaces should be used for indentation
   * @returns {string}
   */

  json: (json, indentation = 2) => {
    console.log(colorize(JSON.stringify(json, null, indentation)));
    return JSON.stringify(json, null, indentation);
  },

  /**
   * Log a string to the console
   * @param  {...string} content - The content to log to the console
   * @returns {string}
   */

  log: (...content) => {
    process.stdout.write(`${content.join(' ')}\n`);
    return content.join(' '); // Functions return the value they are logging
  },

  /**
   * Semantic way of printing a newline character to stdout
   * @param {number} [repeat=1] - How many new lines should be printed
   */

  newline: (repeat = 1) => process.stdout.write('\n'.repeat(repeat)),

  /**
   * Print a progress bar
   * @param {number} [percentage=100] - Progress bar percentage
   * @param {string} [character='\u2588'] - Character used in progress bar
   * @param {number} [columns=process.stdout.columns]
   * @returns {string}
   */

  progress: (percentage = 100, character = '\u2588', columns = process.stdout.columns) => {
    process.stdout.write(`${character.repeat(columns * (percentage / 100))}\r`);
    return character.repeat(columns * (percentage / 100));
  },
};

export default console;
