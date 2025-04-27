
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import ServiceList from '@/components/Service/ServiceList';
import ServiceBookingDialog from '@/components/Service/ServiceBookingDialog';

const BookService = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handleBooking = () => {
    toast({
      title: "Réservation confirmée",
      description: "Nous avons bien reçu votre demande de réservation.",
    });
    setSelectedService(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">
          Nos Services
        </h1>
        <p className="text-gray-600 mb-8">
          Découvrez nos services de beauté professionnels et réservez votre rendez-vous.
        </p>
        
        <ServiceList onServiceSelect={setSelectedService} />
        
        <ServiceBookingDialog
          serviceId={selectedService}
          onClose={() => setSelectedService(null)}
          onSubmit={handleBooking}
        />
      </div>
    </div>
  );
};

export default BookService;

