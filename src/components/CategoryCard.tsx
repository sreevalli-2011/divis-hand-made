import { cn } from "@/lib/utils";

interface CategoryCardProps {
  image: string;
  title: string;
  className?: string;
}

const CategoryCard = ({ image, title, className }: CategoryCardProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-3 group cursor-pointer", className)}>
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all duration-300 group-hover:scale-105 shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </span>
    </div>
  );
};

export default CategoryCard;
