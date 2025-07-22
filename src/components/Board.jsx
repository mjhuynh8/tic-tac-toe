import Tile from "./Tile";
import Strike from "./Strike";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  const strikeClasses = [
    "right-border bottom-border",
    "right-border bottom-border",
    "bottom-border",
    "right-border bottom-border",
    "right-border bottom-border",
    "bottom-border",
    "right-border",
    "right-border",
  ];

  return (
    <div className="board">
      {tiles.map((tileValue, tileIndex) => {
        return (
          <Tile
            key={tileIndex}
            playerTurn={playerTurn}
            onClick={() => onTileClick(tileIndex)}
            value={tileValue}
            className={strikeClasses[tileIndex] ? strikeClasses[tileIndex] : ""}
          />
        );
      })}
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
