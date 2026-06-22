import { useState } from 'react';
import { links, members, type LinkItem, type MemberItem } from './data';

const isTouch = () => window.matchMedia('(hover: none)').matches;

function Tile({ item }: { item: LinkItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`tile${flipped ? ' is-flipped' : ''}`}>
      <div className="tile-inner">
        <a
          className="tile-front"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isTouch()) { e.preventDefault(); setFlipped(true); }
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

function ProductGrid() {
  return (
    <div className="tile-grid">
      {links.map((item, i) => (
        <Tile key={i} item={item} />
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
          <br className="about-br" />
          {' '}각자의 본업이 지루할 때면 틈틈이 해온 '딴짓'들을 한자리에 모아 전시합니다.
        </p>
      </section>

      <section id="products">
        <h2 className="section-title">Products</h2>
        <ProductGrid />
      </section>

      <section id="members">
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
