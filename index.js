import 'core-js';

const console = {

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
   * Print a progress bar
   * @param {int} [percentage=100] - Progress bar percentage
   * @param {string} [character='\u2588'] - Character used in progress bar
   * @param {int} [columns=process.stdout.columns]
   */

  progress: (percentage = 100, character = '\u2588', columns = process.stdout.columns) => {
    process.stdout.write(`${character.repeat(columns * (percentage / 100))}\r`);
    return character.repeat(columns * (percentage / 100));
  },
};

export default console;
