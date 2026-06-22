import { links, members, type LinkItem, type MemberItem } from './data';
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

function ProductGrid() {
  const rows = buildRows(links);
  return (
    <div className="tile-grid">
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
              <div className="tile-overlay" />
              <span className="tile-label">{item.label}</span>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

function MemberCard({ member }: { member: MemberItem }) {
  return (
    <a
      className="member-card"
      href={member.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="member-photo-wrap">
        {member.photo ? (
          <img src={member.photo} alt={member.name} />
        ) : (
          <div className="member-photo-placeholder" />
        )}
      </div>
      <div className="member-info">
        <span className="member-name">{member.name}</span>
        <span className="member-role">{member.role}</span>
        <span className="member-contact">{member.contact}</span>
      </div>
    </a>
  );
}

function App() {
  return (
    <div id="page">
      <section id="about">
        <h1 className="about-title">Cats-Ball</h1>
        <p className="about-subtitle">Art, Design &amp; Engineering</p>
        <p className="about-desc">
          캣츠볼은 디자이너와 엔지니어, 개발자가 모여 결성한 예술가 모임입니다.
          <br />
          각자의 본업이 지루할 때면 틈틈이 해온 '딴짓'들을 한자리에 모아 전시합니다.
        </p>
      </section>

      <hr className="section-divider" />

      <section id="products">
        <p className="section-eyebrow">Works</p>
        <h2 className="section-title">Products</h2>
        <ProductGrid />
      </section>

      <hr className="section-divider" />

      <section id="members">
        <p className="section-eyebrow">People</p>
        <h2 className="section-title">Members</h2>
        <div className="member-list">
          {members.map((m, i) => (
            <MemberCard key={i} member={m} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
