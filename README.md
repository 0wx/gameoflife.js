# gameoflife.js

## Installation

using yarn:

```
yarn add gameoflife.js
```

using npm:

```
npm i gameoflife.js
```

## Usage

```ts
import { GameOfLife } from "gameoflife.js"

const initialCell = [
  {
    width: 1,
    height: 0,
  },
  {
    width: 2,
    height: 1,
  },
  {
    width: 0,
    height: 2,
  },
  {
    width: 1,
    height: 2,
  },
  {
    width: 2,
    height: 2,
  },
]
const game = new GameOfLife({ width: 5, height: 10, initialCell })
```

### Show current cells :

Input

```ts
game.cells
```

Output:

```js
[
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]
```

### Get next cells :

Input

```ts
game.next()
```

Output:

```js
[
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]
```

### Add cells :

input

```ts
game.add([{ width: 0, height: 0 }])
```

output

```js
[
  [1 /* added */, 0, 0, 0, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]
```

### Remove cells :

input

```ts
game.remove([{ width: 0, height: 0 }])
```

output

```js
[
  [0 /* removed */, 0, 0, 0, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]
```

### Toogle cells :

input

```ts
game.toogle([{ width: 0, height: 0 }])
```

output

```js
[
  [1 /* become 1 */, 0, 0, 0, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]
```
