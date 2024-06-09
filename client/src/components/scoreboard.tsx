import React, { FunctionComponent, useEffect, useState } from 'react'
import { PlayerStat, Scores, XorO } from '../../../types'

const playersToScores = (players: PlayerStat[]): Scores =>
  players.reduce(
    (players, { name, score }) => ({ ...players, [ name ]: score }),
    {}
  ) as Scores

export const Scoreboard: FunctionComponent<{ winner: XorO | undefined }> = ({ winner }) => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [scores, setScores] = useState<{ X: number, O: number }>({ X: 0, O: 0 })

  useEffect(() => {
    const fetchOrUpdateScores = async () => {
      try {
        if (!winner) {
          const res = await fetch('http://localhost:3000/scores')
          const responseJson = await res.json()

          setLoading(false)
          setScores(playersToScores(responseJson.body))
        } else {
          await fetch('http://localhost:3000/scores', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: winner, score: scores[ winner ] + 1 })
          })

          setScores({ ...scores, [ winner ]: scores[ winner ] + 1 })
        }
      } catch (e) {
        console.error(e)
        setLoading(false)
        setError(true)
      }
    }

    fetchOrUpdateScores()
  }, [winner])

  return <div className="font-bold text-3xl">
    <h2 className="underline">Scoreboard</h2>
    {
      isLoading
        ? <p>Loading...</p>
        : scores && !error
          ? <ul>
            {Object.entries(scores)
              .map(([name, score]) =>
                <li key={`player-${name}-score`}>{name}: {score}</li>
              )}
          </ul>
          : <p>Encountered issue attempting to retrieve scores.</p>
    }
  </div>
}
