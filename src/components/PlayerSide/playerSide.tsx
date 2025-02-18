import React from "react";
import { Move, Player, PlayerState } from "../../types/game.types";
import { GameButton } from "../gameButton/gameButton";

interface PlayerSideProps {
  player: Player;
  playerState: PlayerState;
  onMove: (move: Move) => void;
  disabled: boolean;
}

export const PlayerSide: React.FC<PlayerSideProps> = ({
  player,
  playerState,
  onMove,
  disabled,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-1/2 p-8 ${
        player === "player1" ? "bg-indigo-50" : "bg-purple-50"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">
        {player === "player1" ? "Player 1" : "Player 2"}
      </h2>
      <div className="text-xl mb-8">Score: {playerState.score}</div>

      {playerState.move ? (
        <div className="text-8xl mb-8">
          {playerState.move === "rock"
            ? "🪨"
            : playerState.move === "paper"
            ? "📄"
            : "✂️"}
        </div>
      ) : (
        <div className="text-8xl mb-8">❓</div>
      )}

      <div className="flex gap-4">
        <GameButton move="rock" onClick={onMove} disabled={disabled} />
        <GameButton move="paper" onClick={onMove} disabled={disabled} />
        <GameButton move="scissors" onClick={onMove} disabled={disabled} />
      </div>
    </div>
  );
};
