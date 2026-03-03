import {
  Award,
  BarChart3,
  Building2,
  Factory,
  Globe,
  Home,
  Layers,
  type LucideIcon,
  Shield,
  TrendingUp,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import type { Service } from "../backend.d";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Globe,
  Shield,
  TrendingUp,
  Truck,
  Wrench,
  Home,
  Layers,
  Factory,
  Zap,
  BarChart3,
  Award,
};

interface ServiceCardProps {
  service: Service;
  showCategory?: boolean;
}

export function ServiceCard({
  service,
  showCategory = false,
}: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Building2;

  return (
    <div className="service-card-hover group bg-white rounded-lg p-6 border border-silver-light shadow-card">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-navy/5 rounded-lg group-hover:bg-gold/10 transition-colors duration-200">
          <IconComponent
            size={22}
            className="text-navy group-hover:text-gold transition-colors duration-200"
          />
        </div>
        <div className="flex-1 min-w-0">
          {showCategory && (
            <span className="inline-block text-[10px] font-body font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded tracking-widest uppercase mb-2">
              {service.category}
            </span>
          )}
          <h3 className="font-display font-semibold text-navy text-base mb-2 leading-snug">
            {service.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
