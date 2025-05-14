
import React, { useState } from 'react';
import ProductGrid from '@/components/Product/ProductGrid';
import { mockProducts } from '@/data/mock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Products = () => {
  const [category, setCategory] = useState<string>("all");
  
  // Obtenir toutes les catégories uniques
  const categories = [...new Set(mockProducts.map(p => p.category))];
  
  // Filtrer les produits selon la catégorie sélectionnée
  const filteredProducts = category === "all" 
    ? mockProducts 
    : mockProducts.filter(product => product.category === category);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Nos Produits</h1>
      <p className="text-gray-600 mb-6">
        Découvrez notre sélection de produits de beauté de haute qualité
      </p>
      
      <Tabs 
        defaultValue="all" 
        value={category} 
        onValueChange={setCategory}
        className="mb-8"
      >
        <TabsList className="mb-6">
          <TabsTrigger value="all">Tous les produits</TabsTrigger>
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={category}>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucun produit disponible dans cette catégorie.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Products;
