
import React from 'react';
import { ProductGrid } from '@/components/Product/ProductGrid';
import { mockProducts } from '@/data/mock';

const SkincareProducts = () => {
  // Filtrer les produits de la catégorie soins de la peau
  const skincareProducts = mockProducts.filter(product => 
    product.category === 'skincare'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Soins de la Peau</h1>
      <p className="text-gray-600 mb-6">
        Prenez soin de votre peau avec notre gamme de produits spécialisés pour tous les types de peau.
      </p>
      
      {skincareProducts.length > 0 ? (
        <ProductGrid products={skincareProducts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun produit disponible dans cette catégorie pour le moment.</p>
        </div>
      )}
    </div>
  );
};

export default SkincareProducts;
