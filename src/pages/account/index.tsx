
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { User, Heart, MessageCircle, Package } from 'lucide-react';

interface ProfileNavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export const ProfileNavLink: React.FC<ProfileNavLinkProps> = ({ to, icon, label, active }) => {
  return (
    <Link 
      to={to}
      className={`flex items-center p-2 rounded-md ${active 
        ? 'bg-primary text-primary-foreground' 
        : 'hover:bg-gray-100'}`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  );
};

const UserProfile = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-medium mb-4">Accès non autorisé</h1>
        <p className="mb-6">Veuillez vous connecter pour accéder à votre profil.</p>
        <Button asChild>
          <Link to="/auth/login">Se connecter</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-6">Mon Profil</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar de navigation du profil */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-medium">
                {user.name.substring(0, 1)}
              </div>
              <div className="ml-4">
                <h2 className="font-medium text-lg">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <nav className="flex flex-col space-y-1">
              <ProfileNavLink to="/account" icon={<User size={18} />} label="Informations personnelles" active />
              <ProfileNavLink to="/account/orders" icon={<Package size={18} />} label="Mes commandes" />
              <ProfileNavLink to="/wishlist" icon={<Heart size={18} />} label="Ma liste de souhaits" />
              <ProfileNavLink to="/messages" icon={<MessageCircle size={18} />} label="Messagerie" />
            </nav>
            
            <Separator className="my-4" />
            
            <Button onClick={signOut} variant="outline" className="w-full">
              Déconnexion
            </Button>
          </div>
        </div>
        
        {/* Contenu principal du profil */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-4">Informations personnelles</h2>
            
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Nom complet</p>
                <p>{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <p>{user.phone || "Non renseigné"}</p>
              </div>
            </div>
            
            <Button className="mr-2">Modifier mes informations</Button>
            <Button variant="outline">Modifier mon mot de passe</Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h2 className="text-xl font-medium mb-4">Adresses</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Adresse de livraison</h3>
                  <Button variant="link" className="p-0 h-auto">Modifier</Button>
                </div>
                <p>123 Rue de la Beauté</p>
                <p>75001 Paris</p>
                <p>France</p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">Adresse de facturation</h3>
                  <Button variant="link" className="p-0 h-auto">Modifier</Button>
                </div>
                <p>123 Rue de la Beauté</p>
                <p>75001 Paris</p>
                <p>France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
