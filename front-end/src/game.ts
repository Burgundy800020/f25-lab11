interface GameState {
  cells: Cell[];
  player: string;
  winner: string;
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }