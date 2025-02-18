import { HeaderProps } from "../../types/game.types";
export const Header: React.FC<HeaderProps> = ({
  playerType,
  onTogglePlayer,
}) => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 text-white">
        Shifumi Game
      </h1>
      <button
        onClick={onTogglePlayer}
        className="mx-auto block mb-6 bg-gradient-to-r from-purple-600 to-blue-600 
                 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold 
                 text-base md:text-lg hover:from-purple-700 hover:to-blue-700
                 transform hover:scale-105 transition-all duration-300
                 shadow-lg hover:shadow-2xl border-2 border-white/20"
      >
        <span className="whitespace-nowrap">
          {playerType === "human" ? "Switch to Computer" : "Switch to Human"}
        </span>
      </button>
    </>
  );
};
