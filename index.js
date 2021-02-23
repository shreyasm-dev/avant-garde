import 'core-js';
import colorize from 'json-colorizer';

const console = {

  /**
   * Pretty-print, highlight, and log some JSON to the console
   * @param {*} json - Content to convert to JSON and log
   * @param {int} indentation - How many spaces should be used for indentation
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
