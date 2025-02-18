import React from "react";
import { GameState } from "../../types/game.types";

interface GameHistoryProps {
  history: GameState["gameHistory"];
}

export const GameHistory: React.FC<GameHistoryProps> = ({ history }) => {
  return (
    <div className="w-full max-h-40 overflow-y-auto bg-gray-50 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Game History</h3>
      {history.map((game, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-2 border-b"
        >
          <span>
            Player 1: {game.player1Move} vs Player 2: {game.player2Move}
          </span>
          <span className="font-bold">
            {game.winner === "draw"
              ? "Draw"
              : game.winner === "player1"
              ? "Player 1 wins!"
              : "Player 2 wins!"}
          </span>
        </div>
      ))}
    </div>
  );
};
