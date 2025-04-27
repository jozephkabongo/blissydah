
import React from 'react';
import ProductGrid from '@/components/Product/ProductGrid';
import { mockProducts } from '@/data/mock';

const WigsPage = () => {
  // Filtrer les produits de la catégorie perruques
  const wigsProducts = mockProducts.filter(product => 
    product.category === 'wigs'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Perruques</h1>
      <p className="text-gray-600 mb-6">
        Explorez notre collection de perruques de qualité supérieure pour transformer votre look.
      </p>
      
      {wigsProducts.length > 0 ? (
        <ProductGrid products={wigsProducts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun produit disponible dans cette catégorie pour le moment.</p>
        </div>
      )}
    </div>
  );
};

export default WigsPage;
