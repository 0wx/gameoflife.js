# gameoflife.js

## Installation
using yarn:
```session
yarn add gameoflife.js
```
using npm:
```session
npm i gameoflife.js
```

## Usage
```ts
import { GameOfLife } from 'gameoflife.js'

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
  }
]
const game = new GameOfLife({ width: 5, height: 10, initialCell })

console.log(game.cells)
console.log(game.next())
```

Output:
```session
[
  [ 0, 1, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0 ],
  [ 1, 1, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
]
[
  [ 0, 0, 0, 0, 0 ],
  [ 1, 0, 1, 0, 0 ],
  [ 0, 1, 1, 0, 0 ],
  [ 0, 1, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ]
]
```

