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

### `console.cursor`

#### `console.cursor.hide()`

```javascript
console.cursor.hide(); // Hide the cursor
```

#### `console.cursor.show()`

```javascript
// Recommended, but unnecessary since the cursor will automatically be restored when the process exits (or crashes)
console.cursor.show(); // Show the cursor
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
);
```

### `console.log`

```javascript
// Same as regular console.log except for the fact that the function returns what it logs
console.log('Hello,', 'World!'); // Output: Hello, World!
```

### `console.newline()`

```javascript
// Semantic way of printing a new line
console.newline();
```

### `console.progress()`

```javascript
console.progress(
  35, // Percentage
  '=', // Character used in progress bar
  100, // Number of columns the progress bar should take at 100% (default is full width of the terminal)
);

console.newline(); // A new line has to printed later to avoid the progress bar being erased
```
