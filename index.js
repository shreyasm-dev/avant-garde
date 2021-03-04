import 'core-js';
import colorize from 'json-colorizer';
import restoreCursor from 'restore-cursor';
import logUpdate from 'log-update';

restoreCursor();

/**
 * If the value returned is falsy, the animation will stop playing
 * @callback animationCallback
 * @param {number} iteration - Iteration number
 * @param {string} frame - Frame printed
 * @returns {boolean}
 */

let timestamp = false;
let cursorHidden = false;
const count = {}; // Where the console.count values are stored

const console = {

  /**
   * Play an animation asynchronously
   * @param {array.<string>} frames - Array of frames to play
   * @param {number} [intervalTime=1] - How many milliseconds each frame should be shown for
   * @param {animationCallback} [callback=()=>true] - Function to run after the current frame is shown
   * @param {boolean} [clear=false] - Clear the animation after it's done playing
   * @returns {number}
   */

  animation: (frames, intervalTime = 1, callback = () => true, clear = false) => {
    let iteration = 0;

    const interval = setInterval(() => {
      logUpdate(frames[iteration % frames.length]);

      if (!callback(iteration, frames[iteration % frames.length])) {
        clearInterval(interval);
        if (clear) {
          logUpdate.clear();
        }
      }

      iteration++;
    }, intervalTime);

    return interval;
  },

  /**
   * Clear the console
   */

  clear: () => process.stdout.write('\x1B[2J\x1B[u'),

  /**
   * Log the number of times the label has been counted
   * @param {string} [label='default']
   * @returns {number}
   */

  count: (label = 'default') => {
    if (!count[label]) {
      count[label] = 0;
    }

    console.log(`${label}: ${++count[label]}`);
    return count[label];
  },

  /**
   * Cursor control
   */

  cursor: {
    /**
     * Hide the cursor
     */

    hide: () => {
      process.stdout.write('\x1B[?25l');
      cursorHidden = true;
    },

    /**
     * Show the cursor
     */

    show: () => {
      process.stdout.write('\x1B[?25h');
      cursorHidden = false;
    },

    /**
     * Check if the cursor is hidden
     * @returns {boolean}
     */

    isHidden: () => cursorHidden,

    /**
     * Toggle the cursor
     */

    toggle: () => (cursorHidden ? console.cursor.show : console.cursor.hide)(),
  },

  /**
   * Print a debugging message to the console
   * @param  {...string} content - The content to be printed
   * @returns {string}
   */

  debug: (...content) => {
    console.log(`\x1B[34m${content.join(' ')}\x1B[34m`);
    return content.join(' ');
  },

  /**
   * Print an error to the console
   * @param  {...string} content - The content to be shown as the error
   * @returns {string}
   */

  error: (...content) => {
    console.log(`\x1B[31m${content.join(' ')}\x1B[31m`);
    return content.join(' ');
  },

  /**
   * Print an informational message to the console
   * @param  {...string} content
   */

  info: (...content) => {
    console.log(`\x1B[36m${content.join(' ')}\x1B[36m`);
    return content.join(' ');
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
    process.stdout.write(`${timestamp ? `\x1b[31m[${new Date().toJSON()}]\x1b[0m ` : ''}${content.join(' ')}\n`);
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
    logUpdate(`${character.repeat(columns * (percentage / 100))}`);
    return character.repeat(columns * (percentage / 100));
  },

  /**
   * Log to the console with a timestamp
   * @param {boolean} on - Truthy or falsy value that determines if the timestamp will be logged
   * @returns {boolean}
   */

  timestamp: (on) => {
    timestamp = !!on;
    return timestamp;
  },
};

export default console;
