import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <div className="container mx-auto px-4">
        
        {/* Top Row */}
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo (LEFT - important fix) */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
            />
           <h1 className="hidden lg:block text-lg font-bold text-primary leading-tight">
  Divi's <span className="block text-sm font-medium">Hand Made Hub</span>
</h1>
          </div>

          {/* Search (CENTER) */}
          <div className="hidden lg:flex items-center w-full max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 bg-muted/50 border-border w-full"
              />
            </div>
          </div>

          {/* Icons (RIGHT) */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="hover:bg-muted relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Title */}
        <div className="lg:hidden text-center pb-2">
          <h1 className="text-lg font-bold text-primary">
            Divi's Hand made Hub
          </h1>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block border-t border-border py-4`}>
          <ul className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8 text-sm font-medium">
            <li><a href="#" className="hover:text-primary">Best Sellers</a></li>
            <li><a href="#" className="hover:text-primary flex items-center gap-1">
              Gifting <span className="bg-secondary px-1.5 py-0.5 rounded text-xs">🎁</span>
            </a></li>
            <li><a href="#" className="hover:text-primary">New Arrivals</a></li>
            <li><a href="#" className="hover:text-primary">Products</a></li>
            <li><a href="#" className="hover:text-primary">About Us</a></li>
            <li><a href="#" className="hover:text-primary">Customer Reviews</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;