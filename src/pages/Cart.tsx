
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/components/ui/use-toast';

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  
  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Votre panier est vide",
        description: "Ajoutez des produits à votre panier avant de passer commande.",
        variant: "destructive"
      });
      return;
    }
    
    // Dans une implémentation réelle, nous redirigerions vers la page de paiement
    // Pour le moment, affichons juste un message de confirmation
    toast({
      title: "Commande en cours de traitement",
      description: "Vous allez être redirigé vers notre plateforme de paiement sécurisée.",
    });
  };
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-6">Votre Panier</h1>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="mb-6 text-gray-500">Votre panier est vide.</p>
          <Button asChild>
            <Link to="/products">Continuer vos achats</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-6">Votre Panier</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {/* En-têtes - visibles seulement sur desktop */}
          <div className="hidden md:grid md:grid-cols-12 bg-gray-50 p-4 rounded-lg">
            <div className="col-span-6">Produit</div>
            <div className="col-span-2 text-center">Prix</div>
            <div className="col-span-2 text-center">Quantité</div>
            <div className="col-span-2 text-center">Total</div>
          </div>
          
          {/* Produits du panier */}
          {items.map((item) => (
            <div key={item.product.id} className="bg-white rounded-lg shadow-sm p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-6 flex items-center gap-4">
                <div className="w-20 h-20 rounded-md overflow-hidden">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-sm text-gray-500 capitalize">{item.product.category}</p>
                  <button 
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 text-sm flex items-center mt-2 md:hidden"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Supprimer
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-2 text-center flex items-center justify-between md:block">
                <span className="md:hidden">Prix:</span>
                <span>{item.product.price.toFixed(2)} €</span>
              </div>
              
              <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                <span className="md:hidden">Quantité:</span>
                <div className="flex items-center border rounded-md">
                  <button 
                    className="px-2 py-1 text-gray-500 hover:text-gray-700"
                    onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-2 py-1 min-w-[2rem] text-center">{item.quantity}</span>
                  <button 
                    className="px-2 py-1 text-gray-500 hover:text-gray-700"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="md:col-span-2 text-center flex items-center justify-between md:block">
                <span className="md:hidden">Total:</span>
                <span className="font-medium">{(item.product.price * item.quantity).toFixed(2)} €</span>
              </div>
              
              <div className="hidden md:flex md:col-span-1 justify-center">
                <button 
                  onClick={() => removeItem(item.product.id)}
                  className="text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
          
          <div className="flex justify-between pt-4">
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="text-red-500"
            >
              Vider le panier
            </Button>
            <Button asChild variant="outline">
              <Link to="/products">Continuer vos achats</Link>
            </Button>
          </div>
        </div>
        
        {/* Récapitulatif de commande */}
        <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Sous-total</span>
              <span>{totalPrice.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Frais de livraison</span>
              <span>Calculé à la prochaine étape</span>
            </div>
            <div className="border-t pt-3 mt-3 flex justify-between font-medium">
              <span>Total (TTC)</span>
              <span>{totalPrice.toFixed(2)} €</span>
            </div>
          </div>
          <Button 
            onClick={handleCheckout}
            className="w-full"
          >
            Commander
          </Button>
          <p className="text-xs text-gray-500 mt-4 text-center">
            En passant commande, vous acceptez nos conditions générales de vente et notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
