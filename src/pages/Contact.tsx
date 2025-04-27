
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Headphones, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-playfair font-semibold mb-2">Nous Contacter</h1>
      <p className="text-gray-600 mb-8">
        Vous avez des questions ? Nous sommes là pour vous aider.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulaire de contact */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-medium mb-4">Envoyez-nous un message</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">Prénom</label>
                  <Input id="firstName" placeholder="Votre prénom" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">Nom</label>
                  <Input id="lastName" placeholder="Votre nom" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" placeholder="votre@email.com" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
                <Input id="subject" placeholder="Sujet de votre message" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Comment pouvons-nous vous aider ?" 
                  rows={5} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">Envoyer le message</Button>
            </div>
          </form>
        </div>
        
        {/* Informations de contact */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-medium mb-4">Informations de contact</h2>
            
            <div className="space-y-4">
              <div className="flex">
                <MapPin className="h-5 w-5 text-primary-foreground mr-3 shrink-0" />
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-gray-600">123 Rue de la Beauté, 75001 Paris, France</p>
                </div>
              </div>
              
              <div className="flex">
                <Mail className="h-5 w-5 text-primary-foreground mr-3 shrink-0" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">contact@blushbeauty.com</p>
                </div>
              </div>
              
              <div className="flex">
                <Headphones className="h-5 w-5 text-primary-foreground mr-3 shrink-0" />
                <div>
                  <h3 className="font-medium">Téléphone</h3>
                  <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex">
                <Clock className="h-5 w-5 text-primary-foreground mr-3 shrink-0" />
                <div>
                  <h3 className="font-medium">Heures d'ouverture</h3>
                  <p className="text-gray-600">Lundi - Vendredi: 9h - 19h</p>
                  <p className="text-gray-600">Samedi: 10h - 18h</p>
                  <p className="text-gray-600">Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-4">Trouvez-nous</h2>
            <div className="h-64 bg-gray-200 rounded-lg">
              {/* Placeholder pour la carte */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Carte interactive ici
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
