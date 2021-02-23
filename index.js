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
};

export default console;
