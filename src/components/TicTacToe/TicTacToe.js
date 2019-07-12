import React from "react";

import "./TicTacToe.css";

const initialState = {
  gameState: {
    "r1-c1": null,
    "r1-c2": null,
    "r1-c3": null,
    "r2-c1": null,
    "r2-c2": null,
    "r2-c3": null,
    "r3-c1": null,
    "r3-c2": null,
    "r3-c3": null
  },
  playersTurn: "X",
  winner: undefined
};

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidUpdate() {
    let winCases = [
      [1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 0, 1, 0, 1, 0, 0]
    ];

    const points = [];
    Object.values(this.state.gameState).map(val => {
      points.push(val === "X" ? 2 : val === "O" ? 4 : 0);
      return { points };
    });
    let winner = "";
    winCases.forEach((foo, i) => {
      let countX = 0;
      points.forEach((val, index) => {
        if (winCases[i][index] + val === 3) {
          countX++;
        }
        winner = countX === 3 ? "RED" : undefined;
        if (!this.state.winner && winner) {
          this.setState({ winner: winner });
        }
      });
    });
    winCases.forEach((foo, i) => {
      let countO = 0;
      points.forEach((val, index) => {
        if (winCases[i][index] + val === 5) {
          countO++;
        }
        winner = countO === 3 ? "BLUE" : undefined;
        if (!this.state.winner && winner) {
          this.setState({ winner: winner });
        }
      });
    });
  }

  render() {
    const fieldColor = {
      X: "field-red",
      O: "field-blue"
    };
    return (
      <>
        <div id="game-board">
          {Object.keys(this.state.gameState).map(key => {
            return (
              <button
                disabled={!!this.state.gameState[key] || this.state.winner}
                id={key}
                className={`field ${fieldColor[this.state.gameState[key]]}`}
                onClick={() =>
                  this.setState(state => ({
                    gameState: { ...state.gameState, [key]: state.playersTurn },
                    playersTurn: state.playersTurn === "X" ? "O" : "X"
                  }))
                }
              />
            );
          })}
        </div>
        <h1 id="winner">
          {!!this.state.winner ? this.state.winner + " WINS!" : false}
        </h1>
        <button onClick={() => this.setState(initialState)} id="restart">
          restart game
        </button>
      </>
    );
  }
}

export { TicTacToe };
