export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-zinc-400">{subtitle}</p>}
    </div>
  );
}
