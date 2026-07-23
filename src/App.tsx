import { members } from "./data";
import { ProductGrid } from "./components/ProductGrid";
import { MemberCard } from "./components/MemberCard";

function App() {
  return (
    <div id="page">
      <section id="about">
        <h1 className="about-title">Cats-Ball</h1>
        <p className="about-subtitle">Art, Design &amp; Engineering</p>
        <p className="about-desc">
          캣츠볼은 디자이너와 엔지니어, 개발자가 모여 결성한 예술가 모임입니다.
          <br className="about-br" />
          각자의 본업이 지루할 때면 틈틈이 해온 '딴짓'들을 한자리에 모아
          전시합니다.
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
