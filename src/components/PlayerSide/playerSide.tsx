import { GameButton } from "../gameButton/gameButton";
import { PlayerSideProps } from "../../types/game.types";

const PlayerSide: React.FC<PlayerSideProps> = ({
  player,
  playerState,
  onMove,
  disabled,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full sm:w-1/2 
                    p-4 sm:p-8 lg:p-12 xl:p-16
                    ${player === "player1" ? "bg-indigo-50" : "bg-purple-50"}`}
    >
      <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 lg:mb-6">
        {player === "player1" ? "Player 1" : "Player 2"}
        {playerState.type === "computer" && " (Computer)"}
      </h2>
      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-8 lg:mb-10">
        Score: {playerState.score}
      </div>

      {playerState.move ? (
        <div className="text-5xl sm:text-8xl lg:text-9xl xl:text-[10rem] mb-4 sm:mb-8 lg:mb-10 animate-bounce">
          {playerState.move === "rock"
            ? "🪨"
            : playerState.move === "paper"
            ? "📄"
            : "✂️"}
        </div>
      ) : (
        <div className="text-5xl sm:text-8xl lg:text-9xl xl:text-[10rem] mb-4 sm:mb-8 lg:mb-10">
          ❓
        </div>
      )}

      <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6 xl:gap-8 justify-center">
        <GameButton move="rock" onClick={onMove} disabled={disabled} />
        <GameButton move="paper" onClick={onMove} disabled={disabled} />
        <GameButton move="scissors" onClick={onMove} disabled={disabled} />
      </div>
    </div>
  );
};
export default PlayerSide;
