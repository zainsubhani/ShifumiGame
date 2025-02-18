export type PlayerType = "human" | "computer";

export interface PlayerState {
  move: Move | null;
  score: number;
  totalWins: number;
  type: PlayerType;
}
export interface GameResultProps {
  result: string | null;
  onReset: () => void;
}
export type Move = "rock" | "paper" | "scissors";
export type Player = "player1" | "player2";
export type GameResult = "player1" | "player2" | "draw" | null;
export interface GameAreaProps {
  gameState: GameState;
  onMove: (player: "player1" | "player2", move: Move) => void;
  showWinnerAnimation?: GameResult; // Updated type here
}
export interface PlayerSideProps {
  player: Player;
  playerState: PlayerState;
  onMove: (move: Move) => void;
  disabled: boolean;
}
export interface GameButtonProps {
  move: Move;
  onClick: (move: Move) => void;
  disabled?: boolean;
}
export interface GameHistoryProps {
  history: GameHistoryEntry[];
}
export interface ScoreBoardProps {
  player1Wins: number;
  player2Wins: number;
}
export interface HeaderProps {
  playerType: string;
  onTogglePlayer: () => void;
}

export interface GameHistoryEntry {
  player1Move: Move;
  player2Move: Move;
  winner: "player1" | "player2" | "draw";
  timestamp: Date;
}

export interface GameState {
  player1: PlayerState;
  player2: PlayerState;
  result: GameResult;
  gameHistory: GameHistoryEntry[];
}
