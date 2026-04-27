import { links, type LinkItem } from './data';
import './App.css';

function buildRows(items: LinkItem[]): LinkItem[][] {
  const n = items.length;
  if (n === 0) return [];
  const numRows = Math.ceil(n / 3);
  const rows: LinkItem[][] = [];
  let remaining = n;
  let offset = 0;
  for (let r = 0; r < numRows; r++) {
    const rowsLeft = numRows - r;
    const cols = Math.ceil(remaining / rowsLeft);
    rows.push(items.slice(offset, offset + cols));
    offset += cols;
    remaining -= cols;
  }
  return rows;
}

function App() {
  const rows = buildRows(links);

  return (
    <div id="grid-page">
      {rows.map((row, ri) => (
        <div className="tile-row" key={ri}>
          {row.map((item, ci) => (
            <a
              className="tile"
              key={ci}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.image} alt={item.label} />
              <span className="tile-label">{item.label}</span>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
