import { assert } from 'chai';
import hookStd from 'hook-std';
import console from '../index.js'; // eslint-disable-line import/extensions

describe('console#cursor', () => {
  describe('#hide', () => {
    it('should hide the cursor', async () => {
      const promise = hookStd.stdout((output, unhook) => {
        unhook();
        assert.strictEqual(output, '\x1B[?25l');
      });

      console.cursor.hide();
      await promise;
    });
  });

  describe('#show', () => {
    it('should show the cursor', async () => {
      const promise = hookStd.stdout((output, unhook) => {
        unhook();
        assert.strictEqual(output, '\x1B[?25h');
      });

      console.cursor.show();
      await promise;
    });
  });

  describe('#isHidden', () => {
    it('should check if the cursor is hidden', () => {
      assert.strictEqual(console.cursor.isHidden(), false);
      console.cursor.hide();
      assert.strictEqual(console.cursor.isHidden(), true);
      console.cursor.show();
      assert.strictEqual(console.cursor.isHidden(), false);
    });
  });

  describe('#toggle', () => {
    it('should toggle the cursor', async () => {
      console.cursor.hide();

      const promise = hookStd.stdout((output, unhook) => {
        unhook();
        assert.strictEqual(output, '\x1B[?25h');
      });

      console.cursor.toggle();
      await promise;
    });
  });
});
