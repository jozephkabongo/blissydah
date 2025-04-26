
import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { mockServices } from '@/data/mock';
import { cn } from '@/lib/utils';

const BookService = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  
  const { toast } = useToast();
  
  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!date || !time || !selectedService || !name || !email || !phone) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }
    
    // Dans une implémentation réelle, nous enverrions ces données à un backend
    toast({
      title: "Réservation envoyée",
      description: `Votre rendez-vous a été réservé pour le ${format(date, 'PPP', { locale: fr })} à ${time}.`,
    });
    
    // Réinitialiser le formulaire
    setDate(undefined);
    setTime('');
    setSelectedService('');
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Réserver un service</h1>
        <p className="text-gray-600 mb-8">
          Réservez un rendez-vous pour l'un de nos services de beauté professionnels.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label htmlFor="service">Service (obligatoire)</Label>
              <RadioGroup 
                id="service" 
                value={selectedService} 
                onValueChange={setSelectedService}
                className="space-y-2"
              >
                {mockServices.map(service => (
                  <div key={service.id} className="flex items-start space-x-2">
                    <RadioGroupItem value={service.id} id={service.id} className="mt-1" />
                    <Label htmlFor={service.id} className="font-normal cursor-pointer flex-grow">
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-500 mt-1">{service.description}</div>
                      <div className="text-sm font-medium mt-1">{service.price} € - {service.duration} min</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="date">Date (obligatoire)</Label>
                <div className="mt-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP', { locale: fr }) : <span>Sélectionner une date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => 
                          date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                          date > new Date(new Date().setMonth(new Date().getMonth() + 2)) ||
                          new Date(date).getDay() === 0  // Dimanche
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div>
                <Label>Heure (obligatoire)</Label>
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {availableTimes.map((t) => (
                    <Button
                      key={t}
                      type="button"
                      variant={time === t ? "default" : "outline"}
                      onClick={() => setTime(t)}
                      className={time === t ? "bg-primary-foreground text-white" : ""}
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div>
              <Label htmlFor="name">Nom complet (obligatoire)</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="mt-1" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="email">Email (obligatoire)</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="mt-1" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone (obligatoire)</Label>
              <Input 
                id="phone" 
                type="tel" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="mt-1" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="notes">Notes (facultatif)</Label>
              <Input 
                id="notes" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
                className="mt-1" 
              />
            </div>
          </div>
          
          <div className="pt-4">
            <Button type="submit" className="w-full md:w-auto">
              Confirmer la réservation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookService;
