export type XorO = 'X' | 'O'
export type Board = (XorO | undefined)[][]
export type PlayerStat = { name: XorO, score: number }
export type Scores = { X: number, O: number }

// If UI and API were two separate repos, I'd put shared (isomorphic) types/utils/configs into
//  a separate package for them both to use. If there was a lot of crossover, I'd probably
//  favour a monorepo structure.
