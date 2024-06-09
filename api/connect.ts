import mariadb, { createConnection } from 'mariadb'
import * as fs from 'fs'

export const port = 3000

const DATABASE_CONFIG = {
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
}

export const connectDb = async () => await mariadb.createConnection({
      ...DATABASE_CONFIG,
      database: 'tic_tac_toe'
    })

// I don't think this is the right place to do it ordinarily
// (docker or pipelines or some bash script is), but I'd rather have done it here than not at all.
export const initialiseDb = async () => {
  try {
    console.log('Testing database connection.')
    const connect = await connectDb()
    connect.end()
    console.log('Database connection successful.')
  } catch (e) {
    // db may not be created
    console.warn(e)
    console.warn('FAILED TO CONNECT TO DATABASE.')
    console.log('Trying to initialise database...')

    const databaseDump = fs.readFileSync('./tic_tac_toe_2024-06-09.sql').toString()

    console.log('Database schema prepared...')
    const connection = await mariadb.createConnection({ ...DATABASE_CONFIG, multipleStatements: true })
    console.log('Connected with MariaDB server...')
    connection.query(databaseDump)
    console.log('Initialised database.')
    await connection.end()
    console.log('Successfully initialised and disconnected.')
  }
}
