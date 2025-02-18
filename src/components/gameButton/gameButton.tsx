import React, { memo } from "react";
import { Move } from "../../types/game.types";

interface GameButtonProps {
  move: Move;
  onClick: (move: Move) => void;
  disabled?: boolean;
}

export const GameButton = memo(
  ({ move, onClick, disabled }: GameButtonProps) => {
    const handleClick = React.useCallback(() => {
      if (!disabled) {
        onClick(move);
      }
    }, [disabled, move, onClick]);

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
        onClick={handleClick}
        disabled={disabled}
        className={`
        p-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500
        hover:from-indigo-600 hover:to-purple-600
        text-white font-bold text-3xl
        transform hover:scale-110 active:scale-95
        transition-all duration-300 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        w-20 h-20 flex items-center justify-center
        hover:shadow-lg hover:shadow-indigo-500/50
      `}
      >
        {getIcon(move)}
      </button>
    );
  }
);

GameButton.displayName = "GameButton";
