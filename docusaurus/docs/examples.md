---
id: examples
title: Examples
---

### `console.animation`

```javascript
console.animation( // Play an animation
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

### `console.json`

```javascript
console.json( // Pretty-print and syntax highlight some JSON
  {
    a: 1,
    b: 2,
    c: 3,
  },
  2, // Indentation size
)
```

### `console.log`

```javascript
// Same as regular console.log except for the fact that the function returns what it logs
console.log('Hello,', 'World!') // Output: Hello, World!
```
