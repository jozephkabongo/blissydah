
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product, useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div className={cn("product-card animate-fade-in", className)}>
      <Link to={`/products/${product.id}`} className="block group">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image transition-transform duration-300 group-hover:scale-105"
          />
          <Button 
            onClick={handleAddToCart}
            variant="secondary" 
            size="sm" 
            className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
        <div className="p-3">
          <h3 className="product-title">{product.name}</h3>
          <div className="flex items-center justify-between mt-1">
            <p className="product-price">{product.price.toFixed(2)} €</p>
            <span className="text-xs text-gray-500 capitalize">{product.category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
