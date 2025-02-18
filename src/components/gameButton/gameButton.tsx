import React from "react";
import { Move } from "../../types/game.types";

interface GameButtonProps {
  move: Move;
  onClick: (move: Move) => void;
  disabled?: boolean;
}

export const GameButton: React.FC<GameButtonProps> = ({
  move,
  onClick,
  disabled,
}) => {
  const getIcon = (move: Move) => {
    switch (move) {
      case "rock":
        return "🪨";
      case "paper":
        return "📄";
      case "scissors":
        return "✂️";
    }
  };

  return (
    <button
      onClick={() => onClick(move)}
      disabled={disabled}
      className={`
        p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500
        hover:from-indigo-600 hover:to-purple-600
        text-white font-bold text-3xl
        transform hover:scale-110 transition-transform
        disabled:opacity-50 disabled:cursor-not-allowed
        w-20 h-20 flex items-center justify-center
      `}
    >
      {getIcon(move)}
    </button>
  );
};
