import React, { useState } from "react";
import { Move, GameState, GameHistoryEntry } from "./types/game.types";
import { PlayerSide } from "./components/PlayerSide/playerSide";
import { GameHistory } from "./components/gameHistory/gameHistory";

const initialState: GameState = {
  player1: { move: null, score: 0 },
  player2: { move: null, score: 0 },
  result: null,
  gameHistory: [],
};

const determineWinner = (
  move1: Move,
  move2: Move
): "player1" | "player2" | "draw" => {
  if (move1 === move2) return "draw";
  if (
    (move1 === "rock" && move2 === "scissors") ||
    (move1 === "paper" && move2 === "rock") ||
    (move1 === "scissors" && move2 === "paper")
  ) {
    return "player1";
  }
  return "player2";
};

export const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const handleMove = (player: "player1" | "player2", move: Move) => {
    setGameState((prev) => {
      const newState = {
        ...prev,
        [player]: { ...prev[player], move },
      };

      // If both players have moved, determine the winner
      if (newState.player1.move && newState.player2.move) {
        const result = determineWinner(
          newState.player1.move,
          newState.player2.move
        );
        const historyEntry: GameHistoryEntry = {
          player1Move: newState.player1.move,
          player2Move: newState.player2.move,
          winner: result,
          timestamp: new Date(),
        };

        return {
          ...newState,
          result,
          player1: {
            ...newState.player1,
            score: prev.player1.score + (result === "player1" ? 1 : 0),
          },
          player2: {
            ...newState.player2,
            score: prev.player2.score + (result === "player2" ? 1 : 0),
          },
          gameHistory: [historyEntry, ...prev.gameHistory],
        };
      }

      return newState;
    });
  };

  const resetRound = () => {
    setGameState((prev) => ({
      ...prev,
      player1: { ...prev.player1, move: null },
      player2: { ...prev.player2, move: null },
      result: null,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient">
          Shifumi Game
        </h1>

        <div className="flex mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <PlayerSide
            player="player1"
            playerState={gameState.player1}
            onMove={(move) => handleMove("player1", move)}
            disabled={gameState.player1.move !== null}
          />
          <PlayerSide
            player="player2"
            playerState={gameState.player2}
            onMove={(move) => handleMove("player2", move)}
            disabled={gameState.player2.move !== null}
          />
        </div>

        {gameState.result && (
          <div className="text-center mb-8">
            <div className="text-2xl font-bold mb-4">
              {gameState.result === "draw"
                ? "It's a draw!"
                : `${
                    gameState.result === "player1" ? "Player 1" : "Player 2"
                  } wins!`}
            </div>
            <button
              onClick={resetRound}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 
           text-white px-8 py-3 rounded-full font-bold text-lg
           hover:from-indigo-600 hover:to-purple-600
           transform hover:scale-110 active:scale-95
           transition-all duration-300 ease-in-out
           shadow-lg hover:shadow-xl
           animate-pulse hover:animate-none
           relative overflow-hidden
           before:absolute before:inset-0 
           before:bg-white before:opacity-0 before:hover:opacity-20
           before:transition-opacity before:duration-300"
            >
              <span className="relative flex items-center justify-center gap-2">
                Next Round
                <svg
                  className="w-5 h-5 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}

        <GameHistory history={gameState.gameHistory} />
      </div>
    </div>
  );
};
