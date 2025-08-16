# React Tic-Tac-Toe

A simple, interactive Tic-Tac-Toe game built with React. This project demonstrates React fundamentals including state management, component composition, and user interaction.

## Features

- **Two-player gameplay** with customizable player names
- **Game board** rendered as a 3x3 grid
- **Move history log** showing all moves made
- **Winner detection** and draw handling
- **Game over screen** with option to restart

## Project Structure

```
src/
  ├── App.jsx                # Main application logic and state
  ├── Components/
  │     ├── Player.jsx       # Player name and status component
  │     ├── GameBoard.jsx    # Board rendering and square selection
  │     ├── Log.jsx          # Move history log
  │     └── GameOverScreen.jsx # Game over and restart UI
  └── winningCombinations.js # Winning combinations for the game
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/shubhamnimkar2/React-tic-tac-toe
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn run dev
   ```

4. **Open your browser** and go to [http://localhost:portal_number](http://localhost:portal_number)

## Usage

- Enter player names and start playing by clicking on the board squares.
- The game will automatically detect a winner or a draw.
- View the move history in the log.
- Restart the game using the Game Over screen.

## Customization

- You can modify the board size, player symbols, or add features like score tracking by editing the components in `src/Components/`.

## License

This project is open source and available under the [MIT License](LICENSE).

---
