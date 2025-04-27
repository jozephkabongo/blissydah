
import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '@/components/Product/ProductGrid';
import { Button } from '@/components/ui/button';
import { mockProducts } from '@/data/mock';
import { ShoppingBag } from 'lucide-react';

const ContinueShopping = () => {
  // Pour la démonstration, nous utilisons tous les produits
  const featuredProducts = mockProducts.slice(0, 8);
  
  // Simuler des catégories populaires
  const popularCategories = [
    { id: 'cosmetics', name: 'Cosmétiques', path: '/products/cosmetics' },
    { id: 'skincare', name: 'Soins de la peau', path: '/products/skincare' },
    { id: 'haircare', name: 'Soins capillaires', path: '/products/haircare' },
    { id: 'wigs', name: 'Perruques', path: '/products/wigs' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-playfair font-semibold flex items-center">
          <ShoppingBag className="mr-2" size={24} />
          Continuer mes achats
        </h1>
        
        <Button asChild variant="outline">
          <Link to="/cart">Voir mon panier</Link>
        </Button>
      </div>
      
      {/* Catégories populaires */}
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Catégories populaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularCategories.map((category) => (
            <Link 
              key={category.id}
              to={category.path}
              className="bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg p-6 text-center"
            >
              <h3 className="font-medium text-lg">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Produits suggérés */}
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Produits populaires</h2>
        <ProductGrid products={featuredProducts} />
      </div>
      
      {/* Suggestions de services */}
      <div className="bg-white rounded-lg shadow-sm p-6 text-center mb-8">
        <h2 className="text-xl font-medium mb-2">Découvrez nos services beauté</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Complétez votre routine beauté avec nos services professionnels de coiffure et maquillage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link to="/services/book">Réserver un service</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/services/hairstyling">Services de coiffure</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/services/makeup">Services de maquillage</Link>
          </Button>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="bg-primary text-primary-foreground rounded-lg shadow-sm p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-medium mb-2">Restez informé</h2>
          <p className="mb-4">
            Abonnez-vous à notre newsletter pour recevoir nos offres exclusives et conseils beauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input 
              type="email"
              placeholder="Votre adresse e-mail"
              className="px-4 py-2 rounded border border-white/30 bg-transparent text-white placeholder-white/70 flex-grow max-w-sm"
            />
            <Button variant="secondary">S'abonner</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueShopping;
