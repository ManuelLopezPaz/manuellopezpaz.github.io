import { trackRecord } from "@/content/content";

export function TrackRecord() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border-subtle bg-card p-5">
      <p className="text-sm font-medium text-foreground">Just getting started</p>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {trackRecord.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="flex items-center gap-2 text-sm text-foreground-muted">
              <Icon size={16} className="text-accent-blue" />
              <span>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
