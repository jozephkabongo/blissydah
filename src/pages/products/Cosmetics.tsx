
import React from 'react';
import ProductGrid from '@/components/Product/ProductGrid';
import { mockProducts } from '@/data/mock';

const CosmeticsPage = () => {
  // Filtrer les produits de la catégorie cosmétiques
  const cosmeticsProducts = mockProducts.filter(product => 
    product.category === 'cosmetics'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Cosmétiques</h1>
      <p className="text-gray-600 mb-6">
        Découvrez notre sélection de produits cosmétiques de haute qualité pour sublimer votre beauté.
      </p>
      
      {cosmeticsProducts.length > 0 ? (
        <ProductGrid products={cosmeticsProducts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun produit disponible dans cette catégorie pour le moment.</p>
        </div>
      )}
    </div>
  );
};

export default CosmeticsPage;
