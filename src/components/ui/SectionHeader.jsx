import { Reveal } from "./Reveal";

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
}) {
  const alignmentClass =
    align === "center"
      ? "mx-auto max-w-3xl text-center items-center"
      : "items-start text-left";

  return (
    <Reveal>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className={`flex max-w-3xl flex-col gap-3 ${alignmentClass}`}>
          <p className="section-label">{eyebrow}</p>
          <div>
            <h2 className="section-title">{title}</h2>
            {description ? <p className="section-copy">{description}</p> : null}
          </div>
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
    </Reveal>
  );
}

export default SectionHeader;
