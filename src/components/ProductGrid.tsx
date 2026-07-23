import { links } from "../data";
import { Tile } from "./Tile";

export function ProductGrid() {
  return (
    <div className="tile-grid">
      {links.map((item, i) => (
        <Tile key={i} item={item} />
      ))}
    </div>
  );
}
