
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ServiceBookingForm from '@/components/Service/ServiceBookingForm';
import { mockServices } from '@/data/mock';

interface ServiceBookingDialogProps {
  serviceId: string | null;
  onClose: () => void;
  onSubmit: () => void;
}

const ServiceBookingDialog: React.FC<ServiceBookingDialogProps> = ({
  serviceId,
  onClose,
  onSubmit
}) => {
  return (
    <Dialog open={!!serviceId} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        {serviceId && (
          <ServiceBookingForm
            service={mockServices.find(s => s.id === serviceId)!}
            onSubmit={onSubmit}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ServiceBookingDialog;

