
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { mockServices } from '@/data/mock';
import ServiceCard from '@/components/Service/ServiceCard';
import ServiceBookingForm from '@/components/Service/ServiceBookingForm';
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockServices.map(service => (
            <ServiceCard
              key={service.id}
              {...service}
              onClick={() => setSelectedService(service.id)}
            />
          ))}
        </div>
        
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="sm:max-w-[500px]">
            {selectedService && (
              <ServiceBookingForm
                service={mockServices.find(s => s.id === selectedService)!}
                onSubmit={handleBooking}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BookService;
