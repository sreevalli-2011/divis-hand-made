import { Instagram, Youtube, PinIcon as Pinterest } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-primary-foreground">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Pinterest">
              <Pinterest className="h-4 w-4" />
            </a>
          </div>
          
          <div className="text-center flex-1">
            <span className="font-medium">15,000+ Orders with 5⭐ Reviews</span>
          </div>
          
          <div className="text-center md:text-right">
            <span>Free Shipping above Rs.599/- (Prepaid Orders)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
