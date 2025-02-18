import { GameResultProps } from "../../types/game.types";

export const GameResult: React.FC<GameResultProps> = ({ result, onReset }) => {
  if (!result) return null;

  return (
    <div className="text-center mb-4 sm:mb-8 lg:mb-12">
      <div className="text-xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white drop-shadow-lg">
        {result === "draw"
          ? "It's a draw!"
          : `${result === "player1" ? "Player 1" : "Player 2"} wins!`}
      </div>
      <button
        onClick={onReset}
        className="bg-gradient-to-r from-yellow-400 to-orange-500 
                 text-white px-6 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-5 
                 rounded-full font-bold text-lg sm:text-2xl lg:text-3xl
                 hover:from-yellow-500 hover:to-orange-600
                 transform hover:scale-110 active:scale-105
                 transition-all duration-300 ease-in-out
                 shadow-[0_0_20px_rgba(255,165,0,0.5)]
                 hover:shadow-[0_0_30px_rgba(255,165,0,0.8)]
                 border-4 border-white/30
                 animate-pulse hover:animate-none
                 relative overflow-hidden
                 group w-auto"
      >
        <span className="relative flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
          Next Round
          <svg
            className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};
