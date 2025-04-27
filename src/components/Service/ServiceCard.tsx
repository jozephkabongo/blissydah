
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Clock, EuroIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  price,
  duration,
  image,
  onClick
}) => {
  return (
    <Card className="group overflow-hidden rounded-lg">
      <div 
        className="relative h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-playfair text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center">
            <EuroIcon className="h-4 w-4 mr-1" />
            <span>{price} €</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={onClick} className="w-full">
          Réserver maintenant
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
