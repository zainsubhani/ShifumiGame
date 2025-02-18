import { useState, useCallback, useEffect } from "react";
import { Move, GameState } from "./types/game.types";
import { GameHistory } from "./components/gameHistory/gameHistory";
import { GameArea } from "./components/gameArena/gameArena";
import { Layout } from "./components/layout/layout";
import { ScoreBoard } from "./components/scoreBoard/scoreBoard";
import { Header } from "./components/header/header";
import { GameResult } from "./components/gameResult/GameResult";

const initialState: GameState = {
  player1: { move: null, score: 0, totalWins: 0, type: "human" },
  player2: { move: null, score: 0, totalWins: 0, type: "human" },
  result: null,
  gameHistory: [],
};

const getComputerMove = (): Move => {
  const moves: Move[] = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
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

export default function App() {
  const [showWinnerAnimation, setShowWinnerAnimation] = useState<
    "player1" | "player2" | null
  >(null);
  const [gameState, setGameState] = useState<GameState>(initialState);

  const handleMove = useCallback(
    (player: "player1" | "player2", move: Move) => {
      setGameState((prev) => {
        const newState = {
          ...prev,
          [player]: { ...prev[player], move },
        };

        if (newState.player1.move && newState.player2.move) {
          const result = determineWinner(
            newState.player1.move,
            newState.player2.move
          );

          const historyEntry = {
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
              totalWins:
                prev.player1.totalWins + (result === "player1" ? 1 : 0),
            },
            player2: {
              ...newState.player2,
              score: prev.player2.score + (result === "player2" ? 1 : 0),
              totalWins:
                prev.player2.totalWins + (result === "player2" ? 1 : 0),
            },
            gameHistory: [historyEntry, ...prev.gameHistory],
          };
        }

        return newState;
      });
    },
    []
  );

  useEffect(() => {
    if (
      gameState.player2.type === "computer" &&
      gameState.player1.move &&
      !gameState.player2.move
    ) {
      const timeout = setTimeout(() => {
        handleMove("player2", getComputerMove());
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [
    gameState.player1.move,
    gameState.player2.move,
    gameState.player2.type,
    handleMove,
  ]);

  const resetRound = () => {
    setShowWinnerAnimation(null);
    setGameState((prev) => ({
      ...prev,
      player1: { ...prev.player1, move: null },
      player2: { ...prev.player2, move: null },
      result: null,
    }));
  };

  const togglePlayer2Type = () => {
    setGameState((prev) => ({
      ...prev,
      player2: {
        ...prev.player2,
        type: prev.player2.type === "human" ? "computer" : "human",
        move: null,
      },
      result: null,
    }));
  };

  return (
    <Layout>
      <Header
        playerType={gameState.player2.type}
        onTogglePlayer={togglePlayer2Type}
      />{" "}
      <ScoreBoard
        player1Wins={gameState.player1.totalWins}
        player2Wins={gameState.player2.totalWins}
      />
      <div className="h-10"></div>
      <GameArea
        gameState={gameState}
        onMove={handleMove}
        showWinnerAnimation={showWinnerAnimation}
      />
      <GameResult result={gameState.result} onReset={resetRound} />
      <div
        className="bg-white/90 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm mt-4 
                    max-w-[1600px] mx-auto"
      >
        <GameHistory history={gameState.gameHistory} />
      </div>
    </Layout>
  );
}
