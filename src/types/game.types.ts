export type Move = "rock" | "paper" | "scissors";
export type Player = "player1" | "player2";
export type GameResult = "player1" | "player2" | "draw" | null;

export interface PlayerState {
  move: Move | null;
  score: number;
}

export interface GameHistoryEntry {
  player1Move: Move;
  player2Move: Move;
  winner: "player1" | "player2" | "draw"; // Removed null from possible values
  timestamp: Date;
}

export interface GameState {
  player1: PlayerState;
  player2: PlayerState;
  result: GameResult;
  gameHistory: GameHistoryEntry[];
}
