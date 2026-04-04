import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
}

const ProductCard = ({ image, title, price, originalPrice }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="group overflow-hidden hover:shadow-card transition-all duration-300 border-border">
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 rounded-full bg-card/90 hover:bg-card transition-all duration-200 shadow-md"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? "fill-secondary text-secondary" : "text-muted-foreground"
            }`}
          />
        </button>
        {originalPrice && (
          <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-md">
            {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-foreground">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          )}
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
