import React from "react";

interface WinnerAnimationProps {
  player: "player1" | "player2";
}

export const WinnerAnimation: React.FC<WinnerAnimationProps> = ({ player }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        <div
          className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 
                      opacity-75 blur-lg animate-pulse"
        ></div>
        <div
          className="relative bg-white px-8 py-4 rounded-lg shadow-xl 
                      animate-[bounce_1s_ease-in-out_infinite] transform scale-150"
        >
          <span
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 
                         bg-clip-text text-transparent animate-[pulse_2s_ease-in-out_infinite]"
          >
            {player === "player1" ? "Player 1" : "Player 2"} Wins! 🎉
          </span>
        </div>
      </div>
    </div>
  );
};
