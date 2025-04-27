
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { mockServices } from '@/data/mock';
import ServiceList from '@/components/Service/ServiceList';
import ServiceBookingDialog from '@/components/Service/ServiceBookingDialog';

const HairstylingPage = () => {
  const [selectedService, setSelectedService] = React.useState<string | null>(null);
  const { toast } = useToast();
  
  // Filtrer les services de coiffure
  const hairstylingServices = mockServices.filter(service => 
    service.category === 'hairstyling'
  );

  const handleBooking = () => {
    toast({
      title: "Réservation confirmée",
      description: "Votre rendez-vous a été réservé avec succès. Vous recevrez une confirmation par email.",
    });
    setSelectedService(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Services de Coiffure</h1>
      <p className="text-gray-600 mb-6">
        Transformez votre look avec nos services de coiffure professionnels.
      </p>
      
      {hairstylingServices.length > 0 ? (
        <ServiceList onServiceSelect={setSelectedService} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucun service disponible dans cette catégorie pour le moment.</p>
        </div>
      )}
      
      <ServiceBookingDialog
        serviceId={selectedService}
        onClose={() => setSelectedService(null)}
        onSubmit={handleBooking}
      />
    </div>
  );
};

export default HairstylingPage;
