import { useState } from "react";
import type { MemberItem } from "../data";

function CopyContactButton({ contact }: { contact: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(contact);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      className="member-contact-copy"
      onClick={handleClick}
      aria-label="Copy contact"
    >
      {copied ? "✓" : "copy"}
    </button>
  );
}

export function MemberCard({ member }: { member: MemberItem }) {
  const content = (
    <>
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
        {member.contact && (
          <span className="member-contact-row">
            <span className="member-contact">{member.contact}</span>
            <CopyContactButton contact={member.contact} />
          </span>
        )}
      </div>
    </>
  );

  if (!member.link) {
    return <div className="member-card">{content}</div>;
  }

  return (
    <a
      className="member-card"
      href={member.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}
