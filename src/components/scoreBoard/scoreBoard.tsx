import { ScoreBoardProps } from "../../types/game.types";
export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  player1Wins,
  player2Wins,
}) => {
  return (
    <div className="flex justify-center  lg:px-20 gap-4 sm:gap-8 lg:gap-16 mb-4 lg:mx-8">
      <div
        className="bg-white/90 px-4 sm:px-8 lg:px-12 py-2 sm:py-4 lg:py-6 rounded-lg 
                   shadow-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 
                   w-full sm:w-auto max-w-[200px] lg:max-w-[300px]"
      >
        <div className="text-purple-600 text-sm sm:text-base lg:text-xl">
          Player 1
        </div>
        <div className="text-xl sm:text-3xl lg:text-5xl ">
          {player1Wins} Wins
        </div>
      </div>
      <div
        className="bg-white/90 px-4 sm:px-8 lg:px-12 py-2 sm:py-4 lg:py-6 rounded-lg 
                   shadow-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 
                   w-full sm:w-auto max-w-[200px] lg:max-w-[300px]"
      >
        <div className="text-blue-600 text-sm sm:text-base lg:text-xl">
          Player 2
        </div>
        <div className="text-xl sm:text-3xl lg:text-5xl">
          {player2Wins} Wins
        </div>
      </div>
    </div>
  );
};
