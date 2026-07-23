import type { MemberItem } from "../data";

export function MemberCard({ member }: { member: MemberItem }) {
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
