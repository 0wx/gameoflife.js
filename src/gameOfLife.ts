export interface Position {
  width: number
  height: number
}
interface GameOfLifeConstructor {
  width: number
  height: number
  initialCell?: Position[]
}
export type Cell = number
export class GameOfLife {
  width: number
  height: number
  cells: Cell[][]
  tempCells: Cell[][]
  constructor(props: GameOfLifeConstructor) {
    this.width = props.width
    this.height = props.height

    this.cells = Array.from({ length: this.height }, (_v, h: number) =>
      Array.from({ length: this.width }, (_v, w: number) => {
        if (
          !props.initialCell ||
          !props.initialCell.find(({ height }) => height === h) ||
          !props.initialCell.find(
            ({ height, width }) => width === w && height === h
          )
        )
          return 0
        return 1
      })
    )
    this.tempCells = this.cells
  }
  neighbors = (): number[][] => {
    return this.cells.flat().map((_: any, i: number): Array<number> => {
      const y = Math.trunc(i / this.width)
      const x = i - this.width * y
      const hasNorth = y > 0
      const hasSouth = y < this.height - 1
      const hasEast = x < this.width - 1
      const hasWest = x > 0
      const result: number[] = [
        hasNorth && hasWest ? i - this.width - 1 : -1,
        hasNorth ? i - this.width : -1,
        hasNorth && hasEast ? i - this.width + 1 : -1,
        hasWest ? i - 1 : -1,
        hasEast ? i + 1 : -1,
        hasSouth && hasWest ? i + this.width - 1 : -1,
        hasSouth ? i + this.width : -1,
        hasSouth && hasEast ? i + this.width + 1 : -1,
      ]
      return result.filter((v) => v > -1)
    })
  }
  add = (cells: Position[]) => {
    this.cells = this.cells.map((h, i) => {
      return h.map((w, j) => {
        if (cells.find(({ width, height }) => width === j && height === i))
          return 1
        return w
      })
    })
    return this.cells
  }
  remove = (cells: Position[]) => {
    this.cells = this.cells.map((h, i) => {
      return h.map((w, j) => {
        if (cells.find(({ width, height }) => width === j && height === i))
          return 0
        return w
      })
    })
    return this.cells
  }
  toogle = (cells: Position[]) => {
    this.cells = this.cells.map((h, i) => {
      return h.map((w, j) => {
        if (cells.find(({ width, height }) => width === j && height === i))
          return w === 1 ? 0 : 1
        return w
      })
    })
    return this.cells
  }
  next = () => {
    const neighbors = this.neighbors()
    const data = this.cells.flat()
    const result = data.map((cell, i) => {
      const n = neighbors[i]
        .map((index) => data[index])
        .reduce((a, b) => a + b, 0)
      if (cell === 1 && n < 2) return 0
      if (cell === 1 && n > 3) return 0
      if (cell === 0 && n === 3) return 1
      return cell
    })
    result.forEach((v, i) => {
      const index = Math.trunc(i / this.width)
      this.cells[index][i - this.width * index] = v
    })

    return this.cells
  }
}
