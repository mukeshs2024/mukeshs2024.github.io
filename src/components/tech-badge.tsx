import { getTechLogoUrl } from "@/lib/tech-logos";

type TechBadgeProps = {
  name: string;
  compact?: boolean;
};

// Clean, compact tech chips for projects/timeline
export function TechBadge({ name, compact = false }: TechBadgeProps) {
  const logoUrl = getTechLogoUrl(name);
  const imageSize = compact ? 12 : 14;

  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-none text-[10px] font-mono font-bold bg-transparent text-muted border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:text-heading transition-all uppercase tracking-wider">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          width={imageSize}
          height={imageSize}
          className="object-contain"
        />
      ) : (
        <span className="w-3.5 h-3.5 flex items-center justify-center bg-surface text-accent rounded-none text-[10px] font-bold border border-bordercol">
          {name.charAt(0)}
        </span>
      )}
      <span>{name}</span>
    </span>
  );
}

type SkillCardProps = {
  name: string;
  category: string;
};

// Premium medium-sized skill card for Skills section
export function SkillCard({ name, category }: SkillCardProps) {
  const logoUrl = getTechLogoUrl(name);

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-bordercol hover:border-accent/40 transition-all hover:-translate-y-1 duration-200 group">
      <div className="w-14 h-14 rounded-lg bg-gray-800/40 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800/80 transition-colors">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${name} logo`}
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        ) : (
          <span className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded text-sm font-extrabold">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <h4 className="text-white font-bold text-base truncate leading-snug">{name}</h4>
        <p className="text-white text-xs font-medium tracking-wide mt-0.5">{category}</p>
      </div>
    </div>
  );
}
