---
id: examples
title: Examples
---

### `console.animation()`

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

### `console.clear()`

```javascript
console.log('This text will only be shown for 5 seconds before the console is cleared');
setTimeout(console.clear, 5000);
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

#### `console.cursor.isHidden()`

```javascript
console.log(console.cursor.isHidden()); // false
console.cursor.hide();
console.log(console.cursor.isHidden()); // true
```

#### `console.cursor.toggle()`

```javascript
console.log(console.cursor.isHidden()); // false
console.cursor.toggle(); // Toggle the cursor
console.log(console.cursor.isHidden()); // true
```

### `console.debug()`

```javascript
// Same as regular console.debug except for the fact that the function returns what it logs
console.debug('Something', 'Something else');
```

### `console.error()`

```javascript
// Same as regular console.error except for the fact that the function returns what it logs
console.debug('Error: ', 'Something went wrong');
```

### `console.json()`

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

### `console.log()`

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
```

### `console.timestamp()`

```javascript
console.timestamp(true);
console.log('Timestamp');
console.timestamp(false);
console.log('No timestamp');
```
