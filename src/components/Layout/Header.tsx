
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="border-b sticky top-0 z-40 bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="font-playfair text-primary-foreground text-lg font-bold">B</span>
          </div>
          <span className="ml-2 font-playfair font-medium text-lg hidden sm:inline-block">Blush Beauty</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className={cn(
          "absolute inset-x-0 top-full bg-white border-b py-3 px-4 md:static md:border-0 md:p-0 md:block md:flex-1 md:mx-8 transition-all duration-300",
          isSearchOpen ? "block" : "hidden"
        )}>
          <div className="relative max-w-md mx-auto md:ml-auto md:mr-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Rechercher des produits..." 
              className="w-full pl-10 pr-4 input-field"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-foreground text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
