import { Board, XorO } from './types'
import { useState } from 'react'

export const useWinner = (rows: Board): { winner: XorO | undefined, resetWinner: () => void } => {
  const [winner, setWinner] = useState<XorO | undefined>()
  if (winner) return { winner, resetWinner: () => setWinner(undefined) }
  const checkWinnerInGroup = (group: Board) => group.forEach(row =>
    (row[ 0 ] === 'X' || row[ 0 ] === 'O') && row.every(value => value === row[ 0 ]) && setWinner(row[0]))

  checkWinnerInGroup(rows)

  const columns = [...new Array(rows.length)].map((v, column) => rows.map(row => row[ column ]))
  checkWinnerInGroup(columns)

  const diagonals = [
    rows.map((row, i) => rows[ i ][ i ]),
    [...rows].reverse().map((row, i, reversedBoard) => reversedBoard[ i ][ i ])
  ]
  checkWinnerInGroup(diagonals)

  return { winner, resetWinner: () => setWinner(undefined) }
}