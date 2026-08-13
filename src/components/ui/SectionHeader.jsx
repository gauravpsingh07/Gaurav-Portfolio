import { Reveal } from "./Reveal";

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <Reveal>
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-copy">{description}</p> : null}
        </div>
        {action ? <div className="section-action">{action}</div> : null}
      </div>
    </Reveal>
  );
}

export default SectionHeader;
