
import React from 'react';
import ServiceCard from '@/components/Service/ServiceCard';
import { mockServices } from '@/data/mock';

interface ServiceListProps {
  onServiceSelect: (serviceId: string) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ onServiceSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockServices.map(service => (
        <ServiceCard
          key={service.id}
          {...service}
          onClick={() => onServiceSelect(service.id)}
        />
      ))}
    </div>
  );
};

export default ServiceList;

