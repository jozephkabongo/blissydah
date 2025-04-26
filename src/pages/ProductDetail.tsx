
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductGrid from '@/components/Product/ProductGrid';
import { mockProducts } from '@/data/mock';
import { Product, useCart } from '@/hooks/useCart';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Dans une implémentation réelle, ce serait un appel API
    const foundProduct = mockProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Trouver des produits similaires (même catégorie)
      const similar = mockProducts
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setSimilarProducts(similar);
    }
  }, [id]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Chargement du produit...</p>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: "Produit ajouté au panier",
      description: `${product.name} a été ajouté à votre panier.`,
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation fil d'Ariane */}
      <nav className="text-sm mb-8">
        <ol className="flex flex-wrap items-center">
          <li>
            <Link to="/" className="text-gray-500 hover:text-primary-foreground">Accueil</Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li>
            <Link to="/products" className="text-gray-500 hover:text-primary-foreground">Produits</Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li>
            <Link to={`/products/${product.category}`} className="text-gray-500 hover:text-primary-foreground capitalize">{product.category}</Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="text-gray-800 font-medium truncate">{product.name}</li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image du produit */}
        <div className="bg-white rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
        {/* Informations du produit */}
        <div className="space-y-6">
          <h1 className="text-3xl font-playfair font-semibold">{product.name}</h1>
          <p className="text-2xl font-medium text-primary-foreground">
            {product.price.toFixed(2)} €
          </p>
          
          <p className="text-gray-600">{product.description}</p>
          
          <div className="pt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-gray-700">Quantité:</label>
              <div className="flex items-center border rounded-md">
                <button 
                  className="px-3 py-1 text-gray-500 hover:text-gray-700"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-3 py-1 min-w-[2rem] text-center">{quantity}</span>
                <button 
                  className="px-3 py-1 text-gray-500 hover:text-gray-700"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={handleAddToCart}
                className="flex-grow sm:flex-grow-0"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Ajouter au panier
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="border-t pt-6 mt-6">
            <p className="text-sm text-gray-500">Catégorie: <span className="capitalize">{product.category}</span></p>
            <p className="text-sm text-gray-500 mt-2">ID du produit: {product.id}</p>
            <p className="text-sm text-gray-500 mt-2">En stock</p>
          </div>
        </div>
      </div>
      
      {/* Onglets d'informations */}
      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto pb-0">
          <TabsTrigger 
            value="description"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary-foreground rounded-none px-8 py-2 bg-transparent data-[state=active]:bg-transparent"
          >
            Description
          </TabsTrigger>
          <TabsTrigger 
            value="ingredients"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary-foreground rounded-none px-8 py-2 bg-transparent data-[state=active]:bg-transparent"
          >
            Ingrédients
          </TabsTrigger>
          <TabsTrigger 
            value="reviews"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary-foreground rounded-none px-8 py-2 bg-transparent data-[state=active]:bg-transparent"
          >
            Avis (0)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-6">
          <p className="text-gray-600">{product.description}</p>
          <ul className="list-disc ml-5 mt-4 text-gray-600 space-y-2">
            <li>Haute qualité</li>
            <li>Testé dermatologiquement</li>
            <li>Non testé sur les animaux</li>
            <li>Fabriqué en France</li>
          </ul>
        </TabsContent>
        <TabsContent value="ingredients" className="pt-6">
          <p className="text-gray-600">Liste des ingrédients à venir.</p>
        </TabsContent>
        <TabsContent value="reviews" className="pt-6">
          <p className="text-gray-600">Aucun avis pour le moment. Soyez le premier à donner votre avis sur ce produit.</p>
        </TabsContent>
      </Tabs>
      
      {/* Produits similaires */}
      {similarProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-playfair font-semibold mb-6">Vous aimerez aussi</h2>
          <ProductGrid products={similarProducts} />
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
