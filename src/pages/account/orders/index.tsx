
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Card,
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { User, Heart, MessageCircle, Package, Clock, Calendar, FileText } from 'lucide-react';
import { ProfileNavLink } from '@/pages/account';

// Données de test des commandes
const mockOrders = [
  {
    id: 'ORD-001',
    date: '2025-05-15',
    total: 129.99,
    status: 'Livré',
    items: [
      { id: 1, name: 'Crème hydratante', quantity: 1, price: 49.99 },
      { id: 2, name: 'Sérum visage', quantity: 1, price: 79.99 }
    ]
  },
  {
    id: 'ORD-002',
    date: '2025-05-05',
    total: 85.50,
    status: 'En cours de livraison',
    items: [
      { id: 3, name: 'Mascara volumateur', quantity: 1, price: 35.50 },
      { id: 4, name: 'Rouge à lèvres', quantity: 2, price: 25.00 }
    ]
  },
  {
    id: 'ORD-003',
    date: '2025-04-22',
    total: 65.00,
    status: 'Traitement',
    items: [
      { id: 5, name: 'Huile pour cheveux', quantity: 1, price: 65.00 }
    ]
  },
];

interface OrderItemProps {
  id: string;
  date: string;
  status: string;
  total: number;
  items: Array<{id: number, name: string, quantity: number, price: number}>;
}

const OrderItem: React.FC<OrderItemProps> = ({ id, date, status, total, items }) => {
  // Déterminer la couleur du statut
  const getStatusColor = () => {
    switch (status) {
      case 'Livré':
        return 'text-green-600 bg-green-50';
      case 'En cours de livraison':
        return 'text-blue-600 bg-blue-50';
      case 'Traitement':
        return 'text-amber-600 bg-amber-50';
      case 'Annulé':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Commande {id}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Calendar size={14} className="mr-1" /> 
              {new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </CardDescription>
          </div>
          <div className="flex items-center">
            <span className={`${getStatusColor()} px-2 py-1 rounded-full text-xs font-medium`}>
              {status}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produit</TableHead>
              <TableHead className="text-right">Qté</TableHead>
              <TableHead className="text-right">Prix</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.quantity}</TableCell>
                <TableCell className="text-right">{item.price.toFixed(2)} €</TableCell>
                <TableCell className="text-right">{(item.quantity * item.price).toFixed(2)} €</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} className="text-right font-medium">Total</TableCell>
              <TableCell className="text-right font-bold">{total.toFixed(2)} €</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
        <div className="mt-4 flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/account/orders/${id}`}>
              <FileText className="h-4 w-4 mr-2" />
              Détails
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            Suivre ma commande
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const UserOrders = () => {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-medium mb-4">Accès non autorisé</h1>
        <p className="mb-6">Veuillez vous connecter pour accéder à vos commandes.</p>
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
              <ProfileNavLink to="/account" icon={<User size={18} />} label="Informations personnelles" />
              <ProfileNavLink to="/account/orders" icon={<Package size={18} />} label="Mes commandes" active />
              <ProfileNavLink to="/wishlist" icon={<Heart size={18} />} label="Ma liste de souhaits" />
              <ProfileNavLink to="/messages" icon={<MessageCircle size={18} />} label="Messagerie" />
            </nav>
            
            <Separator className="my-4" />
            
            <Button onClick={signOut} variant="outline" className="w-full">
              Déconnexion
            </Button>
          </div>
        </div>
        
        {/* Contenu principal - Liste des commandes */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-medium mb-6">Mes commandes</h2>
            
            {mockOrders.length > 0 ? (
              <div className="space-y-4">
                {mockOrders.map(order => (
                  <OrderItem 
                    key={order.id}
                    id={order.id}
                    date={order.date}
                    status={order.status}
                    total={order.total}
                    items={order.items}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Package className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium">Aucune commande</h3>
                <p className="text-gray-500 mt-2">Vous n'avez pas encore effectué de commande.</p>
                <Button asChild className="mt-4">
                  <Link to="/products">Explorer les produits</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
