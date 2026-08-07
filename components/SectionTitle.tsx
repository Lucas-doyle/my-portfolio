type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium text-violet-400">
          {eyebrow}
        </p>
      )}

      <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h1>

      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}