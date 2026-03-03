import { Bath, Bed, MapPin, SquareArrowOutUpRight } from "lucide-react";
import type { Property } from "../backend.d";

const imageTagMap: Record<string, string> = {
  penthouse: "/assets/generated/property-penthouse.dim_800x600.jpg",
  villa: "/assets/generated/property-villa.dim_800x600.jpg",
  townhouse: "/assets/generated/property-townhouse.dim_800x600.jpg",
  condo: "/assets/generated/property-condo.dim_800x600.jpg",
};

function getImageSrc(imageTag: string): string {
  return (
    imageTagMap[imageTag.toLowerCase()] ||
    "/assets/generated/hero-construction.dim_1920x1080.jpg"
  );
}

function formatPrice(price: bigint): string {
  const crore = Number(price) / 10_000_000;
  return `₹${crore.toFixed(2)} Cr`;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="card-lift group bg-white rounded-lg overflow-hidden border border-silver-light shadow-card">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={getImageSrc(property.imageTag)}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="inline-block bg-gold text-navy font-body font-bold text-xs px-3 py-1 rounded tracking-wide">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-navy text-lg mb-1 leading-snug line-clamp-1">
          {property.title}
        </h3>
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
          <MapPin size={12} className="text-gold shrink-0" />
          <span className="font-body truncate">{property.location}</span>
        </div>
        <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-5 leading-relaxed">
          {property.description}
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-4 pt-4 border-t border-silver-light">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
            <Bed size={14} className="text-gold" />
            <span>{String(property.bedrooms)} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
            <Bath size={14} className="text-gold" />
            <span>{String(property.bathrooms)} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
            <SquareArrowOutUpRight size={14} className="text-gold" />
            <span>{String(property.area)} sq ft</span>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 w-full py-2.5 border border-navy text-navy font-body font-semibold text-xs tracking-wide rounded transition-all duration-200 hover:bg-navy hover:text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
