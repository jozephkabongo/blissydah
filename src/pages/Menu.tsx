
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ShoppingBag, 
  User, 
  Heart, 
  MessageCircle, 
  Headphones, 
  Info, 
  LogIn, 
  LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Separator } from '@/components/ui/separator';

const Menu = () => {
  const { user, isAdmin, signOut } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-6">Menu</h1>
      
      {/* Section utilisateur */}
      <div className="mb-6">
        {user ? (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-medium">
                {user.name.substring(0, 1)}
              </div>
              <div className="ml-4">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button asChild variant="outline" size="sm" className="flex-grow">
                <Link to="/account">Mon compte</Link>
              </Button>
              <Button onClick={signOut} variant="outline" size="sm" className="flex-grow">
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-4">
            <p className="mb-4">Connectez-vous pour accéder à votre compte et suivre vos commandes</p>
            <div className="flex gap-2">
              <Button asChild className="flex-grow">
                <Link to="/auth/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Connexion
                </Link>
              </Button>
              <Button asChild variant="outline" className="flex-grow">
                <Link to="/auth/register">Inscription</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Menu principal */}
      <div className="space-y-6">
        <div>
          <h2 className="font-medium mb-2">Produits</h2>
          <ul className="bg-white rounded-lg shadow-sm overflow-hidden">
            <MenuItem to="/products/cosmetics" label="Cosmétiques" />
            <MenuItem to="/products/wigs" label="Perruques" />
            <MenuItem to="/products/skincare" label="Soins de la peau" />
            <MenuItem to="/products/haircare" label="Soins capillaires" />
          </ul>
        </div>
        
        <div>
          <h2 className="font-medium mb-2">Services</h2>
          <ul className="bg-white rounded-lg shadow-sm overflow-hidden">
            <MenuItem to="/services/book" label="Réserver un service" />
            <MenuItem to="/services/hairstyling" label="Coiffure" />
            <MenuItem to="/services/makeup" label="Maquillage" />
          </ul>
        </div>
        
        {/* Section Admin si l'utilisateur est admin */}
        {isAdmin && (
          <div>
            <h2 className="font-medium mb-2">Administration</h2>
            <ul className="bg-white rounded-lg shadow-sm overflow-hidden">
              <MenuItem to="/admin/products" label="Gestion des produits" />
              <MenuItem to="/admin/orders" label="Commandes" />
              <MenuItem to="/admin/customers" label="Clients" />
              <MenuItem to="/admin/blog" label="Blog" />
            </ul>
          </div>
        )}
        
        <div>
          <h2 className="font-medium mb-2">Mon compte</h2>
          <ul className="bg-white rounded-lg shadow-sm overflow-hidden">
            <MenuItem to="/cart" label="Mon panier" icon={<ShoppingBag className="h-5 w-5" />} />
            <MenuItem to="/account" label="Mon profil" icon={<User className="h-5 w-5" />} />
            <MenuItem to="/wishlist" label="Ma liste de souhaits" icon={<Heart className="h-5 w-5" />} />
            <MenuItem to="/messages" label="Messagerie" icon={<MessageCircle className="h-5 w-5" />} />
          </ul>
        </div>
        
        <div>
          <h2 className="font-medium mb-2">Assistance</h2>
          <ul className="bg-white rounded-lg shadow-sm overflow-hidden">
            <MenuItem to="/contact" label="Nous contacter" icon={<Headphones className="h-5 w-5" />} />
            <MenuItem to="/faq" label="FAQ" icon={<Info className="h-5 w-5" />} />
            <MenuItem to="/about" label="À propos" />
          </ul>
        </div>
      </div>
      
      <Separator className="my-8" />
      
      <div className="text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Blush Beauty</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/terms" className="hover:text-primary-foreground">Conditions d'utilisation</Link>
          <Link to="/privacy" className="hover:text-primary-foreground">Confidentialité</Link>
        </div>
      </div>
    </div>
  );
};

interface MenuItemProps {
  to: string;
  label: string;
  icon?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, label, icon }) => {
  return (
    <li className="border-b last:border-b-0">
      <Link to={to} className="flex items-center justify-between p-4 hover:bg-gray-50">
        <div className="flex items-center">
          {icon && <span className="mr-3 text-gray-500">{icon}</span>}
          {label}
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </Link>
    </li>
  );
};

export default Menu;
