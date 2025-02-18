import React from "react";
import { PlayerSide } from "../playerSide/playerSide";
import { GameAreaProps } from "../../types/game.types";

export const GameArea: React.FC<GameAreaProps> = ({
  gameState,
  onMove,
  showWinnerAnimation,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 max-w-5xl mx-auto mt-16">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <PlayerSide
          player="player1"
          playerState={gameState.player1}
          onMove={(move) => onMove("player1", move)}
          disabled={gameState.player1.move !== null}
        />
        <PlayerSide
          player="player2"
          playerState={gameState.player2}
          onMove={(move) => onMove("player2", move)}
          disabled={
            gameState.player2.move !== null ||
            gameState.player2.type === "computer"
          }
        />
        {showWinnerAnimation && showWinnerAnimation !== null && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="text-white text-4xl font-bold">
              {showWinnerAnimation === "draw"
                ? "It's a draw!"
                : `${
                    showWinnerAnimation === "player1" ? "Player 1" : "Player 2"
                  } wins!`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
