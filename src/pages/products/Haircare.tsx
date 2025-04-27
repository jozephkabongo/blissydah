
import React from 'react';
import ProductGrid from '@/components/Product/ProductGrid';
import { mockProducts } from '@/data/mock';

const HaircareProducts = () => {
  // Filtrer les produits de la catégorie soins capillaires
  const haircareProducts = mockProducts.filter(product => 
    product.category === 'haircare'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Soins Capillaires</h1>
      <p className="text-gray-600 mb-6">
        Des produits de qualité supérieure pour nourrir, renforcer et embellir vos cheveux.
      </p>
      
      {haircareProducts.length > 0 ? (
        <ProductGrid products={haircareProducts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun produit disponible dans cette catégorie pour le moment.</p>
        </div>
      )}
    </div>
  );
};

export default HaircareProducts;
