import { Board, XorO } from './types'

// This is what I'd do for task 2, but I'd want to run it through code review to check
//   it wasn't too obtuse depending on the codebase style.
//   Ask me why I'm spreading instead of filling (hint: arrays are objects)
export const newBoard = (gridSize = 3): Board =>
  [...new Array(gridSize)].map(() => new Array(gridSize).fill(undefined))
