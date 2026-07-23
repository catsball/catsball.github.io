import { useState } from "react";
import type { LinkItem } from "../data";

const isTouch = () => window.matchMedia("(hover: none)").matches;

export function Tile({ item }: { item: LinkItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`tile${flipped ? " is-flipped" : ""}`}>
      <div className="tile-inner">
        <a
          className="tile-front"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isTouch()) {
              e.preventDefault();
              setFlipped(true);
            }
          }}
        >
          <img src={item.image} alt={item.label} />
          <div className="tile-overlay" />
          <span className="tile-label">{item.label}</span>
        </a>
        <a
          className="tile-back"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="tile-desc">{item.description}</p>
        </a>
      </div>
    </div>
  );
}
