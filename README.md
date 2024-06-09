
# Tic-Tac-Toe

## Quickstart
Make sure you have **node** installed.

To run the UI:
- `cd client`
- `npm i`
- `npm start`

To run the API:
- `docker-compose up --detach`
- `cd api`
- `npm i`
- `npm start`

## About the Solutions

I tend to favour a loosely functional, JS-to-the-max approach. While this style 
has been the norm in some of my previous roles, it wouldn't be the right approach 
for every codebase, particularly on fullstack teams where the backend code is a 
notably different style. I'd be keen to find out which areas of the code did or did not vibe with your own approach!

I did problems 1 and 3, but I coded with problem 2 (variable grid size) in mind.

If I had done problem 2, I would have wanted to check whether the win condition is 3-in-a-row or $numberOfSides-in-a-row. I may have reevaluated my approach for `checkWinner`, particularly because of the number of loops used to construct all the possible diagonal groups if the streak-to-win === 3. I would also have added responsive or adaptive sizing to the board using Tailwind's preset screen sizes.

## Instructions

The below problems are to allow us a glimpse into your problem solving ability, style and current skill set. Please do problem 1, and optionally problem 2 or 3 depending on where you are most comfortable. We expect this test to take 2-3 hours, if you find yourself spending more than this do not aim to solve all 3 problems! We will not be judging based on number of problems completed only the style and thought process.

## Problems
### Problem 1
We have started a basic game of Tic-Tac-Toe as outlined [here](https://en.wikipedia.org/wiki/Tic-tac-toe) but we don't have anyone good enough to code to finish it! 
- Please implement a complete basic game of Tic-Tac-Toe
- Please use React and TypeScript throughout, if you know TailwindCSS please expand on what is already provided, otherwise it is fine to use raw styling 
- Both players will play out of the same application, it is sufficient to just switch the current player each time a move is played
- Once a game is completed, I should be able to start another game 


### Problem 2
We are bored with the basic game now, can you make it so the board can be scaled to any size? 
- Add some kind of input which allows me to change the board size
- The board size should be a number between 3 and 15 

### Problem 3
We want to store game results in a database.
- create a simple backend server (using a simple generator provided by your IDE is fine)
- use any SQL/noSQL database to store the results
- return simple stats back to the front-end: number of win/losses for each player.

Simplification for the task:
- do not use database migration tools, just an SQL or other script to create tables is fine
- add comments about what you were thinking about but didn’t implement because of restrictions
- host the project on your local machine, optional hosting in a public place is fine
- optionally create a Dockerfile to build both back-end and front-end. Do not create any deployment scripts, if it's not necessary.
- optional tests are welcome

