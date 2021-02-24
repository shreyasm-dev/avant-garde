---
id: examples
title: Examples
---

### `console.animation`

```javascript
console.animation(
  [ // Animation frames
    '-',
    '--',
    '---',
    '----',
    '-----',
    '------',
    '-------',
    '--------',
    '---------',
    '----------',
    '-----------',
  ],
  100, // Every frame should be shown for 100 ms

  // This will be called after every frame is shown
  (iteration) => iteration !== 10, // If a falsy value is returned, the animation will stop
);
```
