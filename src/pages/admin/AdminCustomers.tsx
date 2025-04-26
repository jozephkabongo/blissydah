
import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/components/ui/use-toast';
import { mockCustomers } from '@/data/mock';

const AdminCustomers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState(mockCustomers);
  const { toast } = useToast();
  
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleDelete = (id: string) => {
    // Dans une implémentation réelle, ce serait un appel API
    setCustomers(customers.filter(customer => customer.id !== id));
    toast({
      title: "Client supprimé",
      description: "Le client a été supprimé avec succès.",
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-playfair font-semibold">Gestion des clients</h1>
          <p className="text-gray-500 mt-1">{customers.length} clients au total</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm">
        {/* Filtres et recherche */}
        <div className="p-4 border-b">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher un client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filtrer
            </Button>
          </div>
        </div>
        
        {/* Tableau des clients */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Date d'inscription</TableHead>
                <TableHead className="text-right">Commandes</TableHead>
                <TableHead className="text-right">Total dépensé</TableHead>
                <TableHead className="text-right">Dernière commande</TableHead>
                <TableHead className="w-16">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-gray-500">{customer.email}</p>
                        {customer.phone && (
                          <p className="text-xs text-gray-500">{customer.phone}</p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {new Date(customer.registeredDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">{customer.ordersCount}</TableCell>
                    <TableCell className="text-right">{customer.totalSpent.toFixed(2)} €</TableCell>
                    <TableCell className="text-right">
                      {customer.lastOrder 
                        ? new Date(customer.lastOrder).toLocaleDateString() 
                        : "-"}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="cursor-pointer">
                            <Eye className="h-4 w-4 mr-2" />
                            Voir détails
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Edit className="h-4 w-4 mr-2" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="cursor-pointer text-red-600" 
                            onClick={() => handleDelete(customer.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                    Aucun client trouvé
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Affichage de 1 à {filteredCustomers.length} sur {filteredCustomers.length} clients
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>Précédent</Button>
            <Button variant="outline" size="sm" disabled>Suivant</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;
