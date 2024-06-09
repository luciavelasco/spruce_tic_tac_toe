import React, { useEffect, useState } from 'react'
import { Board, XorO } from './types'
import { newBoard } from './utils'
import { useWinner } from './hooks'

export const Main = () => {
  const [board, setBoard] = useState<Board>(newBoard())
  const [currentPlayer, setCurrentPlayer] = useState<XorO>('X')
  const [turnsPlayed, setTurnsPlayed] = useState<number>(0)
  const { winner, resetWinner } = useWinner(board)

  const resetState = () => {
    setBoard(newBoard())
    resetWinner()
    setCurrentPlayer('X')
    setTurnsPlayed(0)
  }

  return <div className="flex flex-col mt-10 items-center gap-10">
    <h1 className="font-bold text-5xl">Tic Tac Toe</h1>
    <div className="flex flex-col gap-1">
      {board.map((row, rowIndex) =>
        <div className="flex gap-1" key={`tictactoe-${rowIndex}`}>
          {row.map((cell, columnIndex) =>
            <div
              key={`tictactoe-${rowIndex}${columnIndex}`}
              className="border-2 border-gray-900 w-20 h-20 cursor-pointer items-center justify-center text-7xl font-bold flex"
              onClick={() => {
                if (!winner && cell === undefined) {
                  const newBoard: Board = [...board]
                  newBoard[ rowIndex ][ columnIndex ] = currentPlayer
                  setBoard(newBoard)
                  setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
                  setTurnsPlayed(turnsPlayed + 1)
                }
              }}
            >
              {cell}
            </div>
          )}
        </div>
      )}
    </div>

    <button
      className="rounded-full bg-green-300 px-8 py-4 text-lg font-medium"
      onClick={resetState}
    >
      reset game
    </button>

    {winner
      ? <p className="font-bold text-3xl">Game over, {winner} won!</p>
      : turnsPlayed === (board.length ** 2)
        ? <p className="font-bold text-3xl">Game over: no winner.</p>
        : null}
  </div>
}
