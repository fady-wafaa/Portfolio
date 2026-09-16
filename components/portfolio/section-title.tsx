export function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2 className=" text-2xl font-medium ">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </header>
  );
}
