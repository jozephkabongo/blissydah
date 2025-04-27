
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { mockProducts } from '@/data/mock';

const Wishlist = () => {
  const { user } = useAuth();
  // Pour l'exemple, on utilise quelques produits du mock comme liste de souhaits
  const wishlistItems = mockProducts.slice(0, 3);

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-medium mb-4">Accès non autorisé</h1>
        <p className="mb-6">Veuillez vous connecter pour accéder à votre liste de souhaits.</p>
        <Button asChild>
          <Link to="/auth/login">Se connecter</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2 flex items-center">
        <Heart className="mr-2 text-primary-foreground" size={24} />
        Ma Liste de Souhaits
      </h1>
      <p className="text-gray-600 mb-6">
        Les produits que vous avez ajoutés à votre liste de souhaits.
      </p>
      
      {wishlistItems.length > 0 ? (
        <div className="space-y-4">
          {wishlistItems.map((product) => (
            <div key={product.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="md:w-1/4 h-48 md:h-auto">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col">
                <div className="flex justify-between">
                  <Link to={`/products/${product.id}`} className="font-medium text-lg hover:underline">
                    {product.name}
                  </Link>
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary-foreground">
                    <Trash2 size={20} />
                  </Button>
                </div>
                <p className="text-primary-foreground font-semibold my-2">{product.price} €</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="mt-auto">
                  <Button className="gap-2">
                    <ShoppingCart size={16} />
                    Ajouter au panier
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <Heart className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <h2 className="text-xl font-medium mb-2">Votre liste de souhaits est vide</h2>
          <p className="text-gray-500 mb-6">
            Commencez à explorer nos produits et ajoutez-les à votre liste de souhaits.
          </p>
          <Button asChild>
            <Link to="/">Explorer les produits</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
